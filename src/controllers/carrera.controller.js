const Carrera = require('../models/carrera.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const carrera = await Carrera.findByPk(id);
    if (carrera) {
      res.status(200).json(carrera);
    } else {
      res.status(404).json({ error: 'Carrera no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la carrera por ID' });
  }
};

// Método para buscar todas las carreras
const findAll = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    res.status(200).json(carreras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar carreras' });
  }
};

// Método para crear una nueva carrera
const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const carrera = await Carrera.create({ descripcion });
    res.status(201).json(carrera);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la carrera' });
  }
};

// Método para actualizar una carrera por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const carrera = await Carrera.findByPk(id);
    if (carrera) {
      await carrera.update({ descripcion });
      res.status(200).json(carrera);
    } else {
      res.status(404).json({ error: 'Carrera no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la carrera' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
