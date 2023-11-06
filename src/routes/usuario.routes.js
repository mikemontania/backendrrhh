const Usuario  = require('../models/usuario.model'); // Asegúrate de ajustar la ruta al modelo si es necesario

// Controlador para obtener todos los usuarios
const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar los usuarios' });
  }
};

// Controlador para obtener un usuario por su ID
const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar el usuario' });
  }
};

// Controlador para crear un nuevo usuario
const createUsuario = async (req, res) => {
  const { usuario, rol, admin, mail, intentos, activo, bloqueado, saltValue, password, pass, rolesId, sucursalesId, empresaId } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({
      usuario,
      rol,
      admin,
      mail,
      intentos,
      activo,
      bloqueado,
      saltValue,
      password,
      pass,
      rolesId,
      sucursalesId,
      empresaId,
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
};

// Controlador para actualizar un usuario por su ID
const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { usuario, rol, admin, mail, intentos, activo, bloqueado, saltValue, password, pass, rolesId, sucursalesId, empresaId } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      usuario.usuario = usuario;
      usuario.rol = rol;
      usuario.admin = admin;
      usuario.mail = mail;
      usuario.intentos = intentos;
      usuario.activo = activo;
      usuario.bloqueado = bloqueado;
      usuario.saltValue = saltValue;
      usuario.password = password;
      usuario.pass = pass;
      usuario.rolesId = rolesId;
      usuario.sucursalesId = sucursalesId;
      usuario.empresaId = empresaId;
      await usuario.save();
      res.json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el usuario' });
  }
};

// Controlador para eliminar un usuario por su ID
const deleteUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      await usuario.destroy();
      res.json({ message: 'Usuario eliminado correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el usuario' });
  }
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
