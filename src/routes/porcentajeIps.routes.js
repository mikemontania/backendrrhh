const express = require('express');
const router = express.Router();
const porcentajeIpsController = require('../controllers/porcentajeIps.controller');

// Ruta para buscar todos los porcentajes IPS
router.get('/porcentajesIps', porcentajeIpsController.findAll);

// Ruta para buscar un porcentaje IPS por ID
router.get('/porcentajesIps/:id', porcentajeIpsController.findById);

// Ruta para crear un nuevo porcentaje IPS
router.post('/porcentajesIps', porcentajeIpsController.create);

// Ruta para actualizar un porcentaje IPS por ID
router.put('/porcentajesIps/:id', porcentajeIpsController.update);

// Ruta para eliminar un porcentaje IPS por ID
router.delete('/porcentajesIps/:id', porcentajeIpsController.deletePorcentajeIps);

module.exports = router;
