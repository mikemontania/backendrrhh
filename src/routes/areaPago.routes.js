const { Router } = require('express');
const areaPagoController = require('../controllers/areaPago.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un área de pago por ID
router.get('/areapago/:id',validarJWT, areaPagoController.findById);

// Ruta para buscar todas las áreas de pago
router.get('/areaspago',validarJWT, areaPagoController.findAll);

// Ruta para crear un nuevo área de pago
router.post('/areapago',validarJWT, areaPagoController.create);

// Ruta para actualizar un área de pago por ID
router.put('/areapago/:id',validarJWT, areaPagoController.update);

module.exports = router;
