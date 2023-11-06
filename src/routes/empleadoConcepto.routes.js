const express = require('express');
const router = express.Router();
const empleadoConceptosController = require('../controllers/empleadoConcepto.controller');

// Ruta para buscar todos los EmpleadoConceptos
router.get('/empleadoConceptos', empleadoConceptosController.findAll);

// Ruta para buscar un EmpleadoConcepto por ID
router.get('/empleadoConceptos/:id', empleadoConceptosController.findById);

// Ruta para crear un nuevo EmpleadoConcepto
router.post('/empleadoConceptos', empleadoConceptosController.create);

// Ruta para actualizar un EmpleadoConcepto por ID
router.put('/empleadoConceptos/:id', empleadoConceptosController.update);

// Ruta para buscar EmpleadoConceptos por empresa
router.get('/empleadoConceptos/empresa/:empresaId', empleadoConceptosController.findAllByEmpresa);

module.exports = router;
