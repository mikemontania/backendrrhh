const { Router } = require('express');
const feriadoController = require('../controllers/feriado.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un Feriado por ID
router.get('/feriado/:id', validarJWT, feriadoController.findById);

// Ruta para buscar todos los Feriados
router.get('/feriados', validarJWT, feriadoController.findAll);

// Ruta para crear un nuevo Feriado
router.post('/feriado', validarJWT, feriadoController.create);

// Ruta para actualizar un Feriado por ID
router.put('/feriado/:id', validarJWT, feriadoController.update);

// Ruta para eliminar un Feriado por ID
router.delete('/feriado/:id', validarJWT, feriadoController.deleteFeriado);

module.exports = router;
