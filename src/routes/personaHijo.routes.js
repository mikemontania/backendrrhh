const express = require('express');
const router = express.Router();
const personasHijosController = require('../controllers/personaHijo.controller');

// Ruta para buscar todas las personas hijos
router.get('/personasHijos', personasHijosController.findAll);

// Ruta para buscar una persona hijo por ID
router.get('/personasHijos/:id', personasHijosController.findById);

// Ruta para crear una nueva persona hijo
router.post('/personasHijos', personasHijosController.create);

// Ruta para actualizar una persona hijo por ID
router.put('/personasHijos/:id', personasHijosController.update);

// Ruta para eliminar una persona hijo por ID
router.delete('/personasHijos/:id', personasHijosController.deletePersonaHijo);

module.exports = router;
