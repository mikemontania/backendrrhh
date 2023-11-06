const { Router } = require('express');
const liquidacionController = require('../controllers/liquidacion.controller');

const router = Router();

// Ruta para buscar todas las liquidaciones
router.get('/liquidaciones', liquidacionController.findAll);

// Ruta para buscar una liquidación por ID
router.get('/liquidaciones/:id', liquidacionController.findById);

// Ruta para crear una nueva liquidación
router.post('/liquidaciones', liquidacionController.create);

// Ruta para actualizar una liquidación por ID
router.put('/liquidaciones/:id', liquidacionController.update);

// Ruta para eliminar una liquidación por ID
router.delete('/liquidaciones/:id', liquidacionController.deleteLiquidacion);

module.exports = router;
