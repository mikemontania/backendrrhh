const express = require('express');
const router = express.Router();
const tipoFamiliaController = require('../controllers/tipoFamilia.controller');

// Rutas para los tipos de familia
router.get('/tipo-familia', tipoFamiliaController.findAllTipoFamilia);

module.exports = router;
