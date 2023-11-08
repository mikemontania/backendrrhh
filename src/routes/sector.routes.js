const express = require('express');
const router = express.Router();
const sectorController = require('../controllers/sector.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

// Rutas para el controlador de Sector
router.get('/sectores', validarJWT, sectorController.findAll);
router.get('/sectores/:id', validarJWT, sectorController.findById);
router.post('/sectores', validarJWT, sectorController.create);
router.put('/sectores/:id', validarJWT, sectorController.update);
router.delete('/sectores/:id', validarJWT, sectorController.deleteSector);

module.exports = router;
