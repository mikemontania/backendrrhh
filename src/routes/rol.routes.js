const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rol.controller');

// Definir rutas para el controlador de roles
router.get('/roles', rolController.findAll);
router.get('/roles/:id', rolController.findById);
router.post('/roles', rolController.create);
router.put('/roles/:id', rolController.update);
router.delete('/roles/:id', rolController.deleteRol);

module.exports = router;
