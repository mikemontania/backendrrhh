const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const sucursalController = require('../controllers/sucursal.controller');

const router = express.Router();

// Rutas para el controlador de Sucursales
router.get('/sucursales', validarJWT, sucursalController.findAll);
router.get('/id/:id', validarJWT, sucursalController.findSucursalById);
router.post('/sucursales', validarJWT, sucursalController.createSucursal);
router.put('/sucursales/:id', validarJWT, sucursalController.updateSucursal);

module.exports = router;
