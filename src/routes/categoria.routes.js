const { Router } = require('express');
const categoriaController = require('../controllers/categoria.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar una categoría por ID
router.get('/categoria/:id', validarJWT, categoriaController.findById);

// Ruta para buscar todas las categorías
router.get('/categorias', validarJWT, categoriaController.findAll);

// Ruta para crear una nueva categoría
router.post('/categoria', validarJWT, categoriaController.create);

// Ruta para actualizar una categoría por ID
router.put('/categoria/:id', validarJWT, categoriaController.update);

module.exports = router;
