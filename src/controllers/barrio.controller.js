const Barrio = require('../models/barrio.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const barrio = await Barrio.findByPk(id);
    if (barrio) {
      res.status(200).json(barrio);
    } else {
      res.status(404).json({ error: 'Barrio no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el barrio por ID' });
  }
};
// Método para buscar todos los registros por empresa (puedes agregar otras condiciones específicas según tu necesidad)
const findAllByLocalidad = async (req, res) => {
  try {
    const { localidadId } = req.params; // Asumiendo que pasas el ID de la empresa como parámetro en la URL
    const barrios = await Barrio.findAll({ where: { localidadId } });
    res.status(200).json(barrios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar barrios' });
  }
};
// Método para buscar todos los registros
const findAll = async (req, res) => {
  try {
    const barrios = await Barrio.findAll();
    res.status(200).json(barrios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar barrios' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const { descripcion, localidadId } = req.body;
    const barrio = await Barrio.create({ descripcion, localidadId });
    res.status(201).json(barrio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el barrio' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, localidadId } = req.body;
    const barrio = await Barrio.findByPk(id);
    if (barrio) {
      await barrio.update({ descripcion, localidadId });
      res.status(200).json(barrio);
    } else {
      res.status(404).json({ error: 'Barrio no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el barrio' });
  }
};



module.exports = {
  findById,
  findAll,
  findAllByLocalidad,
  create,
  update,
};