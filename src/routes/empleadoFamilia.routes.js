const { Router } = require('express');
const empleadoFamiliaController = require('../controllers/empleadoFamilia.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una EmpleadoFamilia por ID
router.get('/empleadoFamilia/:id', validarJWT, empleadoFamiliaController.findById);

// Ruta para buscar todas las EmpleadoFamilias
router.get('/empleadoFamilias', validarJWT, empleadoFamiliaController.findAll);

// Ruta para crear una nueva EmpleadoFamilia
router.post('/empleadoFamilia', validarJWT, empleadoFamiliaController.create);

// Ruta para actualizar una EmpleadoFamilia por ID
router.put('/empleadoFamilia/:id', validarJWT, empleadoFamiliaController.update);

// Ruta para buscar todas las EmpleadoFamilias por empleado
router.get('/empleadoFamilias/empleado/:empleadoId', validarJWT, empleadoFamiliaController.findAllByEmpleado);

module.exports = router;
