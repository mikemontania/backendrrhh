const { Router } = require('express');
const estadoCivilController = require('../controllers/estadoCivil.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un Estado Civil por ID
router.get('/estadoCivil/:id', validarJWT, estadoCivilController.findById);

// Ruta para buscar todos los Estados Civiles
router.get('/estadosCiviles', validarJWT, estadoCivilController.findAll);

// Ruta para crear un nuevo Estado Civil
router.post('/estadoCivil', validarJWT, estadoCivilController.create);

// Ruta para actualizar un Estado Civil por ID
router.put('/estadoCivil/:id', validarJWT, estadoCivilController.update);

// Ruta para eliminar un Estado Civil por ID
router.delete('/estadoCivil/:id', validarJWT, estadoCivilController.deleteEstadoCivil);

module.exports = router;
