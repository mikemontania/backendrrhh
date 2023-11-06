const { Router } = require('express');
const empleadoController = require('../controllers/empleado.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un Empleado por ID
router.get('/id/:id', validarJWT, empleadoController.findById);

// Ruta para buscar todos los Empleados
router.get('/empleados/:activo?', validarJWT, empleadoController.findAll);
// Ruta para buscar todos los Empleados
router.get('/concat/:activo?', validarJWT, empleadoController.findAllConcat);
// Ruta para crear un nuevo Empleado
router.post('/', validarJWT, empleadoController.create);

// Ruta para actualizar un Empleado por ID
router.put('/:id', validarJWT, empleadoController.update);


module.exports = router;
