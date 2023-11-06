const express = require('express');
const router = express.Router();
const turnoController = require('../controllers/turno.controller');

// Rutas para los turnos
router.get('/turnos', turnoController.getAllTurnos);
router.get('/turnos/:id', turnoController.getTurnoById);
router.post('/turnos', turnoController.createTurno);
router.put('/turnos/:id', turnoController.updateTurno);
router.delete('/turnos/:id', turnoController.deleteTurno);

module.exports = router;
