const express = require('express');
const router = express.Router();
const nacionalidadController = require('../controllers/nacionalidad.controller');

// Ruta para buscar todas las nacionalidades
router.get('/nacionalidades', nacionalidadController.findAll);

// Ruta para buscar una nacionalidad por ID
router.get('/nacionalidades/:id', nacionalidadController.findById);

// Ruta para crear una nueva nacionalidad
router.post('/nacionalidades', nacionalidadController.create);

// Ruta para actualizar una nacionalidad por ID
router.put('/nacionalidades/:id', nacionalidadController.update);

// Ruta para eliminar una nacionalidad por ID
router.delete('/nacionalidades/:id', nacionalidadController.deleteNacionalidad);

module.exports = router;
