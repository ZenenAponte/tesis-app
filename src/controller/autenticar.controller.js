const pool = require("../db");
const { createToken } = require("../libs/jwt");

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

const login = async (req, res) => {
  try {
    const { user_name, contrasenna } = req.body;

    if (!user_name || !contrasenna) {
      return res
        .status(401)
        .json(["Nesecita email y contraseña para logearce"]);
    }

    //verificar q el usuario existe

    if (!user) {
      return res.status(401).json(["Usuario no encontrado"]);
    }

    const token = await createToken(String(user.id));

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });
    res.json({
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Error del servidor"]);
  }
};

module.exports = {
  getAutenticar,
  postAutenticar,
  putAutenticar,
  deleteAutenticar,
};
