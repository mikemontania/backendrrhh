const express = require('express');
const router = express.Router();
const turnoController = require('../controllers/turno.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

// Rutas para los turnos
router.get('/turnos', validarJWT, turnoController.findAll);
router.get('/turnos/:id', validarJWT, turnoController.getTurnoById);
router.post('/turnos', validarJWT, turnoController.createTurno);
router.put('/turnos/:id', validarJWT, turnoController.updateTurno);
router.delete('/turnos/:id', validarJWT, turnoController.deleteTurno);

module.exports = router;
