const pool = require('../db');

const getImpuesto = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM impuesto")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postImpuesto = async (req, res, next) => {
    
 try {
        const { id_impu,monto,recaudacion,estado,id_tipo,id_forma,id_tipo_desc,dni} = req.body;
        const result = await pool.query(
            "INSERT INTO impuesto (id_impu,monto,recaudacion,estado,id_tipo,id_forma,id_tipo_desc,dni) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [id_impu,monto,recaudacion,estado,id_tipo,id_forma,id_tipo_desc,dni]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putImpuesto = async (req, res, next) => {
    try {
        const { id_impu } = req.params;
        const { monto,recaudacion,estado,id_tipo,id_forma,id_tipo_desc,dni } = req.body
        const result = await pool.query("UPDATE impuesto SET monto = $1 ,recaudacion = $2,estado = $3,id_tipo = $4,id_forma = $5,id_tipo_desc = $6,dni = $7 WHERE id_impu=$8 RETURNING *", [monto,recaudacion,estado,id_tipo,id_forma,id_tipo_desc,dni,id_impu]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteImpuesto = async (req, res, next) => {
    try {
        const { id_impu } = req.params;
        const result = await pool.query("DELETE FROM impuesto WHERE id_impu=$1", [id_impu]);

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
    getImpuesto,
    postImpuesto,
    putImpuesto,
    deleteImpuesto

}