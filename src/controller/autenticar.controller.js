const { verify } = require("jsonwebtoken");
const pool = require("../db");
const { createToken } = require("../libs/jwt");
const {
  obtenerContribuyentePorUserName,
} = require("./contribuyente.controller");

const getAutenticar = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM autenticar");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const postAutenticar = async (req, res, next) => {
  try {
    const { user_name, contrasenna } = req.body;
    const result = await pool.query(
      "INSERT INTO autenticar (user_name, contrasenna ) VALUES ($1,$2) RETURNING *",
      [user_name, contrasenna]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const putAutenticar = async (req, res, next) => {
  try {
    const { user_name } = req.params;
    const { contrasenna } = req.body;
    const result = await pool.query(
      "UPDATE autenticar SET contrasenna = $1 WHERE user_name=$2 RETURNING *",
      [contrasenna, user_name]
    );

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "No Encontrado",
      });

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteAutenticar = async (req, res, next) => {
  try {
    const { user_name } = req.params;
    const result = await pool.query(
      "DELETE FROM autenticar WHERE user_name=$1",
      [user_name]
    );

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "No Encontrado",
      });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

async function verificarCredenciales(userName, password) {
  const query = `
        SELECT a.user_name, a.contrasenna
        FROM autenticar a
        WHERE a.user_name = $1;
    `;

  try {
    const result = await pool.query(query, [userName]);

    if (result.rows.length > 0) {
      const usuario = result.rows[0];
      /* const passwordValida = await bcrypt.compare(password, usuario.password);
            if (passwordValida) {
                return usuario;
            } */
      return usuario;
    }
    return null; // Credenciales incorrectas
  } catch (error) {
    console.error("Error al verificar las credenciales:", error);
    throw error;
  }
}

function autenticarToken(req, res) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(403).json({ message: "Token no proporcionado." });
  }

  jwt.verify(token, "TOKEN_SECRET", async (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token no válido." });
    }
    console.log(user);

    const contribuyente = await obtenerContribuyentePorUserName(user.userName);

    if (contribuyente) {
      res.status(200).json({ message: "Token válido.", contribuyente });
    } else {
      res.status(404).json({ message: "Contribuyente no encontrado." });
    }
  });
}

const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const usuario = await verificarCredenciales(userName, password);

    const contribuyente = await obtenerContribuyentePorUserName(
      usuario.user_name
    );

    if (usuario) {
      const token = createToken(usuario.user_name);
      res.cookie("token", token, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
      });
      res.json({
        contribuyente,
      });
    } else {
      res.status(401).json({ message: "Credenciales incorrectas." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar sesión.", error: error.message });
  }
};

module.exports = {
  getAutenticar,
  postAutenticar,
  putAutenticar,
  deleteAutenticar,
  login,
  autenticarToken,
};
