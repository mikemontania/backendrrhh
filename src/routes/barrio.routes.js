const { Router } = require('express');
const barrioController = require('../controllers/barrio.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un barrio por ID
router.get('/barrio/:id', validarJWT, barrioController.findById);

// Ruta para buscar todos los barrios
router.get('/barrios', validarJWT, barrioController.findAll);

// Ruta para buscar todos los barrios por sector
router.get('/barrios/sector/:sectorId', validarJWT, barrioController.findAllBySector);

// Ruta para crear un nuevo barrio
router.post('/barrio', validarJWT, barrioController.create);

// Ruta para actualizar un barrio por ID
router.put('/barrio/:id', validarJWT, barrioController.update);

module.exports = router;
