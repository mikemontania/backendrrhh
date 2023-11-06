const express = require('express');
const router = express.Router();
const tipoEmpleadoController = require('../controllers/tipoEmpleado.controller');

// Rutas para los tipos de empleados
router.get('/tipo-empleados/:id', tipoEmpleadoController.findTipoEmpleadoById);
router.put('/tipo-empleados/:id', tipoEmpleadoController.updateTipoEmpleado);
router.delete('/tipo-empleados/:id', tipoEmpleadoController.deleteTipoEmpleado);

module.exports = router;
