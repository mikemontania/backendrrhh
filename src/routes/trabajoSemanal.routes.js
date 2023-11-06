const express = require('express');
const router = express.Router();
const trabajoSemanalController = require('../controllers/trabajoSemanal.controller');

// Rutas para los registros de TrabajoSemanal
router.get('/trabajo-semanal', trabajoSemanalController.findAll);
router.get('/trabajo-semanal/:id', trabajoSemanalController.findById);
router.post('/trabajo-semanal', trabajoSemanalController.create);
router.put('/trabajo-semanal/:id', trabajoSemanalController.update);

module.exports = router;
