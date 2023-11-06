const express = require('express');
const router = express.Router();
const conceptoController = require('../controllers/concepto.controller');

// Ruta para buscar un concepto por ID
router.get('/:id', conceptoController.findById);

// Ruta para buscar todos los conceptos
router.get('/', conceptoController.findAll);

// Ruta para crear un nuevo concepto
router.post('/', conceptoController.create);

// Ruta para actualizar un concepto por ID
router.put('/:id', conceptoController.update);

module.exports = router;
