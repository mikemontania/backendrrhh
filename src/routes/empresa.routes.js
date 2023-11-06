const { Router } = require('express');
const empresaController = require('../controllers/empresa.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una Empresa por ID
router.get('/empresa/:id', validarJWT, empresaController.findById);

// Ruta para buscar todas las Empresas
router.get('/empresas', validarJWT, empresaController.findAll);

// Ruta para crear una nueva Empresa
router.post('/empresa', validarJWT, empresaController.create);

// Ruta para actualizar una Empresa por ID
router.put('/empresa/:id', validarJWT, empresaController.update);

// Ruta para eliminar una Empresa por ID
router.delete('/empresa/:id', validarJWT, empresaController.deleteEmpresa);

module.exports = router;
