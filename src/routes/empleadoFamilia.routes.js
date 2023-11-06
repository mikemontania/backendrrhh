const { Op } = require('sequelize');
const EmpleadoFamilia = require('../models/empleadoFamilia.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoFamilia = await EmpleadoFamilia.findByPk(id);
    if (empleadoFamilia) {
      res.status(200).json(empleadoFamilia);
    } else {
      res.status(404).json({ error: 'EmpleadoFamilia no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la EmpleadoFamilia por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const empleadoFamilias = await EmpleadoFamilia.findAll();
    res.status(200).json(empleadoFamilias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoFamilias' });
  }
};

const create = async (req, res) => {
  try {
    const { nombre, fechaNacimiento, observacion, empleadoId, estadoCivilId, tipoFamiliaId } = req.body;
    const empleadoFamilia = await EmpleadoFamilia.create({
      nombre,
      fechaNacimiento,
      observacion,
      empleadoId,
      estadoCivilId,
      tipoFamiliaId,
    });
    res.status(201).json(empleadoFamilia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la EmpleadoFamilia' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, fechaNacimiento, observacion, empleadoId, estadoCivilId, tipoFamiliaId } = req.body;
    const empleadoFamilia = await EmpleadoFamilia.findByPk(id);
    if (empleadoFamilia) {
      await empleadoFamilia.update({
        nombre,
        fechaNacimiento,
        observacion,
        empleadoId,
        estadoCivilId,
        tipoFamiliaId,
      });
      res.status(200).json(empleadoFamilia);
    } else {
      res.status(404).json({ error: 'EmpleadoFamilia no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la EmpleadoFamilia' });
  }
};

const findAllByEmpleado = async (req, res) => {
  try {
    const { empleadoId } = req.params;
    const empleadoFamilias = await EmpleadoFamilia.findAll({
      where: { empleadoId },
    });
    res.status(200).json(empleadoFamilias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoFamilias por empleado' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findAllByEmpleado,
};
