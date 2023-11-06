const express = require('express');
const router = express.Router();
const seleccionController = require('../controllers/seleccion.controller');

// Rutas para el controlador de Seleccion
router.get('/selecciones', seleccionController.findAllSelecciones);
router.get('/selecciones/:id', seleccionController.findSeleccionById);
router.post('/selecciones', seleccionController.createSeleccion);
router.put('/selecciones/:id', seleccionController.updateSeleccion);

module.exports = router;
