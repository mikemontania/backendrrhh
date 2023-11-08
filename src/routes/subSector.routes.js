const express = require('express');
const router = express.Router();
const subSectorController = require('../controllers/subSector.controller');

// Rutas para el controlador de SubSectores
router.get('/subSector', subSectorController.findAllSubSector);
router.get('/sector/:sectorId', subSectorController.findSubSectorById);
router.post('/subSector', subSectorController.create);
router.put('/subSector/:id', subSectorController.update);
router.get('/subSector/sector/:sectorId', subSectorController.findAllBySector);

module.exports = router;
