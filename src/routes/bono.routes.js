const { Router } = require('express');
const bonoController = require('../controllers/bono.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Ruta para buscar un bono por ID
router.get('/bono/:id', validarJWT, bonoController.findById);

// Ruta para buscar todos los bonos
router.get('/bonos', validarJWT, bonoController.findAll);

// Ruta para buscar todos los bonos por empleado
router.get('/bonos/empleado/:empleadosId', validarJWT, bonoController.findAllByEmpleado);

// Ruta para crear un nuevo bono
router.post('/bono', validarJWT, bonoController.create);

// Ruta para actualizar un bono por ID
router.put('/bono/:id', validarJWT, bonoController.update);

module.exports = router;
