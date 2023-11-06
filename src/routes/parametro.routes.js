const express = require('express');
const router = express.Router();
const parametroController = require('../controllers/parametro.controller');

// Ruta para buscar todos los parámetros
router.get('/parametros', parametroController.findAll);

// Ruta para buscar un parámetro por ID
router.get('/parametros/:id', parametroController.findById);

// Ruta para crear un nuevo parámetro
router.post('/parametros', parametroController.create);

// Ruta para actualizar un parámetro por ID
router.put('/parametros/:id', parametroController.update);

// Ruta para eliminar un parámetro por ID
router.delete('/parametros/:id', parametroController.deleteParametro);

module.exports = router;
