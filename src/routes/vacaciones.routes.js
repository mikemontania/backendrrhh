const { Router } = require('express');
const {
  getAllVacaciones,
  getVacacionesById,
  createVacaciones,
  updateVacaciones,
  deleteVacaciones,
} = require('../controllers/vacaciones.model');

const router = Router();

// Rutas para Vacaciones
router.get('/', getAllVacaciones);
router.get('/:id', getVacacionesById);
router.post('/', createVacaciones);
router.put('/:id', updateVacaciones);
router.delete('/:id', deleteVacaciones);

module.exports = router;
