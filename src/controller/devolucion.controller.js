const pool = require('../db');

const getDevolucion = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM devolucion")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postDevolucion = async (req, res, next) => {
    
 try {
        const { id_devo,aprobacion,monto,id_reclamo} = req.body;
        const result = await pool.query(
            "INSERT INTO devolucion (id_devo,aprobacion,monto,id_reclamo) VALUES ($1,$2,$3,$4) RETURNING *", [id_devo,aprobacion,monto,id_reclamo]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putDevolucion = async (req, res, next) => {
    try {
        const { id_devo } = req.params;
        const { aprobacion,monto,id_reclamo } = req.body
        const result = await pool.query("UPDATE devolucion SET aprobacion = $1 ,monto = $2,id_reclamo = $3 WHERE id_devo=$4 RETURNING *", [aprobacion,monto,id_reclamo,id_devo]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteDevolucion = async (req, res, next) => {
    try {
        const { dni } = req.params;
        const result = await pool.query("DELETE FROM devolucion WHERE id_devo=$1", [id_devo]);

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
    getDevolucion,
    postDevolucion,
    putDevolucion,
    deleteDevolucion

}