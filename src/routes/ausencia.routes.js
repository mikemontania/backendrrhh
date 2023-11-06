const { Router } = require('express');
const ausenciaController = require('../controllers/ausencia.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una ausencia por ID
router.get('/:id', validarJWT, ausenciaController.findById);

// Ruta para buscar todas las ausencias
router.get('/', validarJWT, ausenciaController.findAll);

// Ruta para buscar todas las ausencias de una empresa
router.get('/empresa/:empresasId', validarJWT, ausenciaController.findAllByEmpresa);

// Ruta para crear una nueva ausencia
router.post('/', validarJWT, ausenciaController.create);

// Ruta para actualizar una ausencia por ID
router.put('/:id', validarJWT, ausenciaController.update);

module.exports = router;
