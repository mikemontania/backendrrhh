const { Router } = require('express');
const honorariosProfesionalesController = require('../controllers/honorarioProfesional.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
// Ruta para buscar todos los honorarios profesionales
router.get('/fun/:id', validarJWT, honorariosProfesionalesController.findHistorial);
// Ruta para buscar todos los honorarios profesionales
router.get('/honorariosprofesionales', validarJWT, honorariosProfesionalesController.findAll);

// Ruta para crear un nuevo honorario profesional
router.post('/', validarJWT, honorariosProfesionalesController.create);

// Agregar rutas para otros controladores según tus necesidades

module.exports = router;
