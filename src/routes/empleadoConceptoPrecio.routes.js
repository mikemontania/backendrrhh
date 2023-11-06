const { Router } = require('express');
const empleadoConceptosPrecioController = require('../controllers/empleadoConceptoPrecio.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un EmpleadoConceptosPrecio por ID
router.get('/empleadoConceptosPrecio/:id', validarJWT, empleadoConceptosPrecioController.findById);

// Ruta para buscar todos los EmpleadoConceptosPrecios
router.get('/empleadoConceptosPrecios', validarJWT, empleadoConceptosPrecioController.findAll);

// Ruta para crear un nuevo EmpleadoConceptosPrecio
router.post('/empleadoConceptosPrecio', validarJWT, empleadoConceptosPrecioController.create);

// Ruta para actualizar un EmpleadoConceptosPrecio por ID
router.put('/empleadoConceptosPrecio/:id', validarJWT, empleadoConceptosPrecioController.update);

// Ruta para buscar todos los EmpleadoConceptosPrecios por EmpleadoConcepto
router.get('/empleadoConceptosPrecios/empleadoConcepto/:empleadoConceptosId', validarJWT, empleadoConceptosPrecioController.findAllByEmpleadoConcepto);

module.exports = router;
