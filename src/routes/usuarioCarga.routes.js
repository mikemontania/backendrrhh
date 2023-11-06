const { Router } = require('express');
const {
  getAllUsuariosCarga,
  getUsuarioCargaById,
  createUsuarioCarga,
  updateUsuarioCarga,
  deleteUsuarioCarga,
} = require('../controllers/usuarioCarga.controller');

const router = Router();

// Rutas para UsuariosCarga
router.get('/', getAllUsuariosCarga);
router.get('/:id', getUsuarioCargaById);
router.post('/', createUsuarioCarga);
router.put('/:id', updateUsuarioCarga);
router.delete('/:id', deleteUsuarioCarga);

module.exports = router;
