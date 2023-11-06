const { Router } = require('express');
const debitoCreditoController = require('../controllers/debitoCredito.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un Débito/Crédito por ID
router.get('/debitocredito/:id', validarJWT, debitoCreditoController.findById);

// Ruta para buscar todos los Débitos/Créditos
router.get('/debitoscreditos', validarJWT, debitoCreditoController.findAll);

// Ruta para crear un nuevo Débito/Crédito
router.post('/debitocredito', validarJWT, debitoCreditoController.create);

// Ruta para actualizar un Débito/Crédito por ID
router.put('/debitocredito/:id', validarJWT, debitoCreditoController.update);

// Ruta para buscar Débitos/Créditos relacionados con un Empleado específico
router.get('/debitoscreditos/empleado/:empleadosId', validarJWT, debitoCreditoController.findDebitoCreditoByEmpleado);

// Ruta para buscar Débitos/Créditos relacionados con un ConceptoRRHH específico
router.get('/debitoscreditos/conceptorrhh/:conceptosRrhhId', validarJWT, debitoCreditoController.findDebitoCreditoByConceptoRRHH);

module.exports = router;
