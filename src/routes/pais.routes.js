const express = require('express');
const router = express.Router();
const paisController = require('../controllers/pais.controller');

// Ruta para buscar todos los países
router.get('/paises', paisController.findAll);

// Ruta para buscar un país por ID
router.get('/paises/:id', paisController.findById);

// Ruta para crear un nuevo país
router.post('/paises', paisController.create);

// Ruta para actualizar un país por ID
router.put('/paises/:id', paisController.update);

// Ruta para eliminar un país por ID
router.delete('/paises/:id', paisController.deletePais);

module.exports = router;
