const express = require('express');
const router = express.Router();

const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require('../controllers/usuario.controller'); // Asegúrate de ajustar la ruta al controlador si es necesario

// Ruta para obtener todos los usuarios
router.get('/', getAllUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/', createUsuario);

// Ruta para actualizar un usuario por su ID
router.put('/:id', updateUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/:id', deleteUsuario);

module.exports = router;
