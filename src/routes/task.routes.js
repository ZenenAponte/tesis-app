const { Router } = require('express');
const pool = require('../db');
const { getAutenticar, postAutenticar, putAutenticar, deleteAutenticar } = require('../controller/autenticar.controller');
const { getBloqueo, postBloqueo, putBloqueo, deleteBloqueo } = require('../controller/bloqueo.controller');
const { getCausa, postCausa, putCausa, deleteCausa } = require('../controller/causa.controller');
const { getCausaDescrip, postCausaDescrip, putCausaDescrip, deleteCausaDescrip } = require('../controller/causaDescrip.controller');
const { getContribuyente, postContribuyente, putContribuyente, deleteContribuyente, getContribuyenteID } = require('../controller/contribuyente.controller');
const { getDeduccion, postDeduccion, putDeduccion, deleteDeduccion } = require('../controller/deduccion.controller');
const { getDireccion, postDireccion, putDireccion, deleteDireccion } = require('../controller/direccion.controller');
const { getEstado, postEstado, putEstado, deleteEstado } = require('../controller/estado.controller');
const { getFormaPago, postFormaPago, putFormaPago, deleteFormaPago } = require('../controller/formaPago.controller');
const { getIngreso, postIngreso, putIngreso, deleteIngreso } = require('../controller/ingreso.controller');
const { getLugar, postLugar, putLugar, deleteLugar } = require('../controller/lugar.controller');
const { getNotificacion, postNotificacion, putNotificacion, deleteNotificacion } = require('../controller/notificacion.controller');
const { getSexo, postSexo, putSexo, deleteSexo } = require('../controller/sexo.controller');
const { getSolicitudEsp, postSolicitudEsp, putSolicitudEsp, deleteSolicitudEsp } = require('../controller/solicitudEsp.controller');
const { getTipoDesc, postTipoDesc, putTipoDesc, deleteTipoDesc } = require('../controller/tipoDesc.controller');
const { getTipoImp, postTipoImp, putTipoImp, deleteTipoImp } = require('../controller/tipoImp.controller');
const { getDeclaracion, postDeclaracion, putDeclaracion, deleteDeclaracion } = require('../controller/declaracion.controller');
const { getDevolucion, postDevolucion, putDevolucion, deleteDevolucion} = require('../controller/devolucion.controller')
const { getImpuesto, postImpuesto, putImpuesto, deleteImpuesto } = require('../controller/impuesto.controller')
const { getReclamo, postReclamo, putReclamo, deleteReclamo } = require('../controller/reclamo.controller')

const router = Router();





//Autenticar
router.get('/autenticar',getAutenticar)

router.post('/autenticar',postAutenticar)

router.put('/autenticar/:user_name',putAutenticar)

router.delete('/autenticar/:user_name',deleteAutenticar)


//Bloqueo
router.get('/bloqueo',getBloqueo)

router.post('/bloqueo',postBloqueo)

router.put('/bloqueo/:id_bloq',putBloqueo)

router.delete('/bloqueo/:id_bloq',deleteBloqueo)


//Causa
router.get('/causa',getCausa)

router.post('/causa',postCausa)

router.put('/causa/:id_causa',putCausa)

router.delete('/causa/:id_causa',deleteCausa)


//Contribuyente
router.get('/contribuyente',getContribuyente)

router.get('/contribuyente/:dni',getContribuyenteID)

router.post('/contribuyente',postContribuyente)

router.put('/contribuyente/:dni',putContribuyente)

router.delete('/contribuyente/:dni',deleteContribuyente)


//CausaDescrip
router.get('/causaDescrip',getCausaDescrip)

router.post('/causaDescrip',postCausaDescrip)

router.put('/causaDescrip/:id_causa_descrip',putCausaDescrip)

router.delete('/causaDescrip/:id_causa_descrip',deleteCausaDescrip)


//Declaracion
router.get('/decla',getDeclaracion)

router.post('/decla',postDeclaracion)

router.put('/decla/:id_decla',putDeclaracion)

router.delete('/decla/:id_decla',deleteDeclaracion)


//Deduccion
router.get('/deduccion',getDeduccion)

router.post('/deduccion',postDeduccion)

router.put('/deduccion/:id_deduc',putDeduccion)

router.delete('/deduccion/:id_deduc',deleteDeduccion)


//Devolucion
router.get('/devolucion',getDevolucion)

router.post('/devolucion',postDevolucion)

router.put('/devolucion/:id_devo',putDevolucion)

router.delete('/devolucion/:id_devo',deleteDevolucion)




//Direccion
router.get('/direccion',getDireccion)

router.post('/direccion',postDireccion)

router.put('/direccion/:id_direcc',putDireccion)

router.delete('/direccion/:id_direcc',deleteDireccion)


//Estado
router.get('/estado',getEstado)

router.post('/estado',postEstado)

router.put('/estado/:id_estado',putEstado)

router.delete('/estado/:id_estado',deleteEstado)


//FormaPago
router.get('/formaPago',getFormaPago)

router.post('/formaPago',postFormaPago)

router.put('/formaPago/:id_forma',putFormaPago)

router.delete('/formaPago/:id_forma',deleteFormaPago)


//Impuesto
router.get('/impuesto',getImpuesto)

router.post('/impuesto',postImpuesto)

router.put('/impuesto/:id_impu',putImpuesto)

router.delete('/impuesto/:id_impu',deleteImpuesto)


//Ingreso
router.get('/ingreso',getIngreso)

router.post('/ingreso',postIngreso)

router.put('/ingreso/:id_ingre',putIngreso)

router.delete('/ingreso/:id_ingre',deleteIngreso)

//Lugar
router.get('/lugar',getLugar)

router.post('/lugar',postLugar)

router.put('/lugar/:id_lugar',putLugar)

router.delete('/lugar/:id_lugar',deleteLugar)


//Notificacion
router.get('/notificacion',getNotificacion)

router.post('/notificacion',postNotificacion)

router.put('/notificacion/:id_notif',putNotificacion)

router.delete('/notificacion/:id_notif',deleteNotificacion)


//Reclamo
router.get('/reclamo',getReclamo)

router.post('/reclamo',postReclamo)

router.put('/reclamo/:id_reclamo',putReclamo)

router.delete('/reclamo/:id_reclamo',deleteReclamo)

//Reportes e Informes






//Sexo
router.get('/sexo',getSexo)

router.post('/sexo',postSexo)

router.put('/sexo/:id_sexo',putSexo)

router.delete('/sexo/:id_sexo',deleteSexo)


//SolicitudEsp
router.get('/solEsp',getSolicitudEsp)

router.post('/solEsp',postSolicitudEsp)

router.put('/solEsp/:id_sol_esp',putSolicitudEsp)

router.delete('/solEsp/:id_sol_esp',deleteSolicitudEsp)


//TipoDesc
router.get('/tipoDesc',getTipoDesc)

router.post('/tipoDesc',postTipoDesc)

router.put('/tipoDesc/:id_tipo_desc',putTipoDesc)

router.delete('/tipoDesc/:id_tipo_desc',deleteTipoDesc)


//TipoImp
router.get('/TipoImp',getTipoImp)

router.post('/TipoImp',postTipoImp)

router.put('/TipoImp/:id_tipo',putTipoImp)

router.delete('/TipoImp/:id_tipo',deleteTipoImp)










module.exports = router;