const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = express.Router();
const salarioDetalleController = require('../controllers/salarioDetalle.controller');

// Rutas para el controlador de SalarioDetalle
router.get('/fun/:id', validarJWT, salarioDetalleController.findHistorial);
router.get('/salarioDetalles', validarJWT, salarioDetalleController.findAll);
router.get('/salarioDetalles/:id', validarJWT, salarioDetalleController.findById);
router.post('/salarioDetalles', validarJWT, salarioDetalleController.create);
router.put('/salarioDetalles/:id', validarJWT, salarioDetalleController.update);
router.delete('/salarioDetalles/:id', validarJWT, salarioDetalleController.deleteSalarioDetalle);

module.exports = router;
