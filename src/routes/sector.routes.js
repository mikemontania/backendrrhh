const express = require('express');
const router = express.Router();
const sectorController = require('../controllers/sector.controller');

// Rutas para el controlador de Sector
router.get('/sectores', sectorController.findAll);
router.get('/sectores/:id', sectorController.findById);
router.post('/sectores', sectorController.create);
router.put('/sectores/:id', sectorController.update);
router.delete('/sectores/:id', sectorController.deleteSector);

module.exports = router;
