const { Router } = require('express');
const desvinculacionCabController = require('../controllers/desvinculacionCab.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una Desvinculación por ID
router.get('/desvinculacion/:id', validarJWT, desvinculacionCabController.findById);

// Ruta para buscar todas las Desvinculaciones
router.get('/desvinculaciones', validarJWT, desvinculacionCabController.findAll);

// Ruta para crear una nueva Desvinculación
router.post('/desvinculacion', validarJWT, desvinculacionCabController.create);

// Ruta para actualizar una Desvinculación por ID
router.put('/desvinculacion/:id', validarJWT, desvinculacionCabController.update);

module.exports = router;
