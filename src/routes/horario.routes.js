const { Router } = require('express');
const horarioController = require('../controllers/horario.controller');

const router = Router();

// Ruta para buscar todos los horarios
router.get('/horarios', horarioController.findAll);

// Ruta para buscar un horario por ID
router.get('/horarios/:id', horarioController.findById);
// Ruta para buscar un horario por ID
router.get('/turnosubsector/:turnosId/:subSectorId', horarioController.findTurnoById);

// Ruta para crear un nuevo horario
router.post('/horarios', horarioController.create);

// Ruta para actualizar un horario por ID
router.put('/horarios/:id', horarioController.update);

// Ruta para eliminar un horario por ID
router.delete('/horarios/:id', horarioController.deleteHorario);

module.exports = router;
