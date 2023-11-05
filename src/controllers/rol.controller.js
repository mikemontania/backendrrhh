const Rol = require('../models/rol.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ error: 'Rol no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Rol por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los Roles' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const rol = await Rol.create({ descripcion });
    res.status(201).json(rol);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Rol' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const rol = await Rol.findByPk(id);
    if (rol) {
      await rol.update({ descripcion });
      res.status(200).json(rol);
    } else {
      res.status(404).json({ error: 'Rol no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Rol' });
  }
};

const deleteRol = async (req, res) => {
  try {
    const { id } = req.params;
    const rol = await Rol.findByPk(id);
    if (rol) {
      await rol.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Rol no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el Rol' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteRol,
};
