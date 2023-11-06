const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursal.controller');

// Rutas para el controlador de Sucursales
router.get('/sucursales', sucursalController.findAllSucursales);
router.get('/sucursales/:id', sucursalController.findSucursalById);
router.post('/sucursales', sucursalController.createSucursal);
router.put('/sucursales/:id', sucursalController.updateSucursal);
router.get('/sucursales/empresa/:empresasId', sucursalController.findAllByEmpresa);

module.exports = router;
