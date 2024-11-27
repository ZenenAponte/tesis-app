const pool = require('../db');

const getDeclaracion = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM declaracion")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postDeclaracion = async (req, res, next) => {
    
 try {
        const { id_decla,fecha,id_ingre,id_deduc,dni} = req.body;
        const result = await pool.query(
            "INSERT INTO declaracion (id_decla,fecha,id_ingre,id_deduc,dni) VALUES ($1,$2,$3,$4,$5) RETURNING *", [id_decla,fecha,id_ingre,id_deduc,dni]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putDeclaracion = async (req, res, next) => {
    try {
        const { id_decla } = req.params;
        const { fecha,id_ingre,id_deduc,dni } = req.body
        const result = await pool.query("UPDATE declaracion SET fecha = $1 ,id_ingre = $2,id_deduc = $3,dni = $4 WHERE id_decla=$5 RETURNING *", [fecha,id_ingre,id_deduc,dni,id_decla]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteDeclaracion = async (req, res, next) => {
    try {
        const { dni } = req.params;
        const result = await pool.query("DELETE FROM declaracion WHERE id_decla=$1", [id_decla]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }


};

module.exports = {
    getDeclaracion,
    postDeclaracion,
    putDeclaracion,
    deleteDeclaracion

}