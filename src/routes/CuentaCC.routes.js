const { Router } = require('express');
const cuentaCCController = require('../controllers/cuentaCC.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una cuenta de Centro de Costo por código
router.get('/cuentacc/:codigo', validarJWT, cuentaCCController.findById);

// Ruta para buscar todas las cuentas de Centro de Costo
router.get('/cuentascostos', validarJWT, cuentaCCController.findAll);

// Ruta para crear una nueva cuenta de Centro de Costo
router.post('/cuentacc', validarJWT, cuentaCCController.create);

// Ruta para actualizar una cuenta de Centro de Costo por código
router.put('/cuentacc/:codigo', validarJWT, cuentaCCController.update);

module.exports = router;
