const { Router } = require('express');
const conceptoRRHHController = require('../controllers/conceptoRRHH.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un concepto de RRHH por ID
router.get('/conceptorrhh/:id', validarJWT, conceptoRRHHController.findById);

// Ruta para buscar todos los conceptos de RRHH
router.get('/conceptosrrhh', validarJWT, conceptoRRHHController.findAll);

// Ruta para crear un nuevo concepto de RRHH
router.post('/conceptorrhh', validarJWT, conceptoRRHHController.create);

// Ruta para actualizar un concepto de RRHH por ID
router.put('/conceptorrhh/:id', validarJWT, conceptoRRHHController.update);

module.exports = router;
