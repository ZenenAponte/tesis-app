const pool = require('../db');

const getReclamo = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM reclamo")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postReclamo = async (req, res, next) => {
    
 try {
        const { id_reclamo,fecha,descripcion,id_lugar,id_sol_esp,id_estado,dni} = req.body;
        const result = await pool.query(
            "INSERT INTO reclamo (id_reclamo,fecha,descripcion,id_lugar,id_sol_esp,id_estado,dni) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", [id_reclamo,fecha,descripcion,id_lugar,id_sol_esp,id_estado,dni]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putReclamo = async (req, res, next) => {
    try {
        const { id_reclamo } = req.params;
        const { fecha,descripcion,id_lugar,id_sol_esp,id_estado,dni } = req.body
        const result = await pool.query("UPDATE reclamo SET fecha = $1 ,descripcion = $2,id_lugar = $3,id_sol_esp = $4,id_estado = $5, dni = $6 WHERE id_reclamo=$7 RETURNING *", [fecha,descripcion,id_lugar,id_sol_esp,id_estado,dni,id_reclamo]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteReclamo = async (req, res, next) => {
    try {
        const { id_reclamo } = req.params;
        const result = await pool.query("DELETE FROM reclamo WHERE id_reclamo=$1", [id_reclamo]);

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
    getReclamo,
    postReclamo,
    putReclamo,
    deleteReclamo

}