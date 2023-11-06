const { Router } = require('express');
const cierreMensualController = require('../controllers/cierreMensual.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un cierre mensual por ID
router.get('/cierremensual/:id', validarJWT, cierreMensualController.findById);

// Ruta para buscar todos los cierres mensuales de una empresa
router.get('/cierresmensuales/empresa/:empresasId', validarJWT, cierreMensualController.findAllByEmpresa);

// Ruta para buscar todos los cierres mensuales
router.get('/cierresmensuales', validarJWT, cierreMensualController.findAll);

// Ruta para crear un nuevo cierre mensual
router.post('/cierremensual', validarJWT, cierreMensualController.create);

// Ruta para actualizar un cierre mensual por ID
router.put('/cierremensual/:id', validarJWT, cierreMensualController.update);

module.exports = router;
