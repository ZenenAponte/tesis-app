const pool = require('../db');

const getReporteInformes = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM reporteInformes")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postReporteInformes = async (req, res, next) => {
    
 try {
        const { id_rep_info,cant_decla,cant_impu,monto_impu,cant_recla,cant_devo,monto_devo,dni} = req.body;
        const result = await pool.query(
            "INSERT INTO reporteInformes (id_rep_info,cant_decla,cant_impu,monto_impu,cant_recla,cant_devo,monto_devo,dni) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [id_rep_info,cant_decla,cant_impu,monto_impu,cant_recla,cant_devo,monto_devo,dni]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putReporteInformes = async (req, res, next) => {
    try {
        const { id_rep_info } = req.params;
        const { cant_decla,cant_impu,monto_impu,cant_recla,cant_devo,monto_devo,dni } = req.body
        const result = await pool.query("UPDATE reporteInformes SET cant_decla = $1 ,cant_impu = $2,monto_impu = $3,cant_recla = $4,cant_devo = $5,monto_devo = $6,dni = $7 WHERE id_rep_info=$8 RETURNING *", [cant_decla,cant_impu,monto_impu,cant_recla,cant_devo,monto_devo,dni,id_rep_info]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteReporteInformes = async (req, res, next) => {
    try {
        const { id_rep_info } = req.params;
        const result = await pool.query("DELETE FROM reporteInformes WHERE id_rep_info=$1", [id_rep_info]);

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
    getReporteInformes,
    postReporteInformes,
    putReporteInformes,
    deleteReporteInformes

}