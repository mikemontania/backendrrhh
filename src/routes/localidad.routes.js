const { Router } = require('express');
const localidadController = require('../controllers/localidad.controller');

const router = Router();

// Ruta para buscar todas las localidades
router.get('/localidades', localidadController.findAll);

// Ruta para buscar una localidad por ID
router.get('/localidades/:id', localidadController.findById);

// Ruta para crear una nueva localidad
router.post('/localidades', localidadController.create);

// Ruta para actualizar una localidad por ID
router.put('/localidades/:id', localidadController.update);

// Ruta para eliminar una localidad por ID
router.delete('/localidades/:id', localidadController.deleteLocalidad);

module.exports = router;
