// En tipoDia.routes.js

const express = require('express');
const router = express.Router();
const tipoDiaController = require('../controllers/tipoDia.controller'); // Asegúrate de que la importación del controlador sea correcta

// Ruta para buscar un tipo de día por ID
router.get('/tipo-dias/:id', tipoDiaController.findTipoDiaById);

// Ruta para crear un nuevo tipo de día
router.post('/tipo-dias', tipoDiaController.createTipoDia);

// Ruta para actualizar un tipo de día por ID
router.put('/tipo-dias/:id', tipoDiaController.updateTipoDia);

// Ruta para eliminar un tipo de día por ID
router.delete('/tipo-dias/:id', tipoDiaController.deleteTipoDia);

module.exports = router;
