const { Router } = require('express');
const carreraController = require('../controllers/carrera.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una carrera por ID
router.get('/carrera/:id', validarJWT, carreraController.findById);

// Ruta para buscar todas las carreras
router.get('/carreras', validarJWT, carreraController.findAll);

// Ruta para crear una nueva carrera
router.post('/carrera', validarJWT, carreraController.create);

// Ruta para actualizar una carrera por ID
router.put('/carrera/:id', validarJWT, carreraController.update);

module.exports = router;
