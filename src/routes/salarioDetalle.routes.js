const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = express.Router();
const salarioDetalleController = require('../controllers/salarioDetalle.controller');

// Rutas para el controlador de SalarioDetalle
router.get('/fun/:id', validarJWT, salarioDetalleController.findHistorial);
router.get('/:id', validarJWT, salarioDetalleController.findById);
router.post('/', validarJWT, salarioDetalleController.create);
router.put('/:id', validarJWT, salarioDetalleController.update);
router.delete('/:id', validarJWT, salarioDetalleController.deleteSalarioDetalle);

module.exports = router;
