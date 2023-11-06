const express = require('express');
const router = express.Router();
const precioConceptosController = require('../controllers/precioConcepto.controller');

// Ruta para buscar todos los PrecioConceptos
router.get('/precioConceptos', precioConceptosController.findAll);

// Ruta para buscar un PrecioConcepto por ID
router.get('/precioConceptos/:id', precioConceptosController.findById);

// Ruta para crear un nuevo PrecioConcepto
router.post('/precioConceptos', precioConceptosController.create);

// Ruta para actualizar un PrecioConcepto por ID
router.put('/precioConceptos/:id', precioConceptosController.update);

// Ruta para eliminar un PrecioConcepto por ID
router.delete('/precioConceptos/:id', precioConceptosController.deletePrecioConceptos);

module.exports = router;
