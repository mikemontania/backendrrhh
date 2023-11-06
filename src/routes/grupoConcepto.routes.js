const { Router } = require('express');
const grupoConceptoController = require('../controllers/grupoConcepto.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un Grupo de Concepto por ID
router.get('/grupoconcepto/:id', validarJWT, grupoConceptoController.findById);

// Ruta para buscar todos los Grupos de Concepto
router.get('/gruposconcepto', validarJWT, grupoConceptoController.findAll);

// Ruta para crear un nuevo Grupo de Concepto
router.post('/grupoconcepto', validarJWT, grupoConceptoController.create);

// Ruta para actualizar un Grupo de Concepto por ID
router.put('/grupoconcepto/:id', validarJWT, grupoConceptoController.update);

// Ruta para eliminar un Grupo de Concepto por ID
router.delete('/grupoconcepto/:id', validarJWT, grupoConceptoController.deleteGrupoConcepto);

module.exports = router;
