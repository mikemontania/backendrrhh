const express = require('express');
const router = express.Router();
const salarioDetalleController = require('../controllers/salarioDetalle.controller');

// Rutas para el controlador de SalarioDetalle
router.get('/salarioDetalles', salarioDetalleController.findAll);
router.get('/salarioDetalles/:id', salarioDetalleController.findById);
router.post('/salarioDetalles', salarioDetalleController.create);
router.put('/salarioDetalles/:id', salarioDetalleController.update);
router.delete('/salarioDetalles/:id', salarioDetalleController.deleteSalarioDetalle);

module.exports = router;
