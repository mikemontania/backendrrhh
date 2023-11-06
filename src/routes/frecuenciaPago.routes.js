const { Router } = require('express');
const frecuenciaPagoController = require('../controllers/frecuenciaPago.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una Frecuencia de Pago por ID
router.get('/frecuenciapago/:id', validarJWT, frecuenciaPagoController.findById);

// Ruta para buscar todas las Frecuencias de Pago
router.get('/frecuenciaspago', validarJWT, frecuenciaPagoController.findAll);

// Ruta para crear una nueva Frecuencia de Pago
router.post('/frecuenciapago', validarJWT, frecuenciaPagoController.create);

// Ruta para actualizar una Frecuencia de Pago por ID
router.put('/frecuenciapago/:id', validarJWT, frecuenciaPagoController.update);

// Ruta para eliminar una Frecuencia de Pago por ID
router.delete('/frecuenciapago/:id', validarJWT, frecuenciaPagoController.deleteFrecuenciaPago);

module.exports = router;
