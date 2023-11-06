const { Router } = require('express');
const motivoDespidoController = require('../controllers/motivoDespido.controller');

const router = Router();

// Ruta para buscar todos los motivos de despido
router.get('/motivos-despido', motivoDespidoController.findAll);

// Ruta para buscar un motivo de despido por ID
router.get('/motivos-despido/:id', motivoDespidoController.findById);

// Ruta para crear un nuevo motivo de despido
router.post('/motivos-despido', motivoDespidoController.create);

// Ruta para actualizar un motivo de despido por ID
router.put('/motivos-despido/:id', motivoDespidoController.update);

// Ruta para eliminar un motivo de despido por ID
router.delete('/motivos-despido/:id', motivoDespidoController.deleteMotivoDespido);

module.exports = router;
