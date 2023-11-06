const { Router } = require('express');
const motivoAusenciasController = require('../controllers/motivoAusencia.controller');

const router = Router();

// Ruta para buscar todos los motivos de ausencias
router.get('/motivos-ausencias', motivoAusenciasController.findAll);

// Ruta para buscar un motivo de ausencias por ID
router.get('/motivos-ausencias/:id', motivoAusenciasController.findById);

// Ruta para crear un nuevo motivo de ausencias
router.post('/motivos-ausencias', motivoAusenciasController.create);

// Ruta para actualizar un motivo de ausencias por ID
router.put('/motivos-ausencias/:id', motivoAusenciasController.update);

// Ruta para eliminar un motivo de ausencias por ID
router.delete('/motivos-ausencias/:id', motivoAusenciasController.deleteMotivoAusencias);

module.exports = router;
