const { Router } = require('express');
const empleadoCuotasController = require('../controllers/empleadoCuota.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una EmpleadoCuota por ID
router.get('/empleadoCuotas/:id', validarJWT, empleadoCuotasController.findById);

// Ruta para buscar todas las EmpleadoCuotas
router.get('/empleadoCuotas', validarJWT, empleadoCuotasController.findAll);

// Ruta para crear una nueva EmpleadoCuota
router.post('/empleadoCuotas', validarJWT, empleadoCuotasController.create);

// Ruta para actualizar una EmpleadoCuota por ID
router.put('/empleadoCuotas/:id', validarJWT, empleadoCuotasController.update);

// Ruta para buscar todas las EmpleadoCuotas por empleado
router.get('/empleadoCuotas/empleado/:empleadosId', validarJWT, empleadoCuotasController.findAllByEmpleado);

module.exports = router;
