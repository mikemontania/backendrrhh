const { Router } = require('express');
const centroCostoController = require('../controllers/centroCosto.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un centro de costo por código
router.get('/centrocosto/:codigo', validarJWT, centroCostoController.findById);

// Ruta para buscar todos los centros de costo de una empresa
router.get('/centroscosto/empresa/:empresasId', validarJWT, centroCostoController.findAllByEmpresa);

// Ruta para buscar todos los centros de costo
router.get('/centroscosto', validarJWT, centroCostoController.findAll);

// Ruta para crear un nuevo centro de costo
router.post('/centrocosto', validarJWT, centroCostoController.create);

// Ruta para actualizar un centro de costo por código
router.put('/centrocosto/:codigo', validarJWT, centroCostoController.update);

module.exports = router;
