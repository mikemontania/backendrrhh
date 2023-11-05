const DesvinculacionDet = require('../models/desvinculacionDet.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un registro por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const desvinculacionDet = await DesvinculacionDet.findByPk(id);
    if (desvinculacionDet) {
      res.status(200).json(desvinculacionDet);
    } else {
      res.status(404).json({ error: 'Detalle de desvinculación no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el detalle de desvinculación por ID' });
  }
};

// Método para buscar todos los registros
const findAll = async (req, res) => {
  try {
    const desvinculacionDetalles = await DesvinculacionDet.findAll();
    res.status(200).json(desvinculacionDetalles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar detalles de desvinculaciones' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const { desvinculacionCabId, conceptosRrhhId, cantidad, montoTotal } = req.body;
    const desvinculacionDet = await DesvinculacionDet.create({ desvinculacionCabId, conceptosRrhhId, cantidad, montoTotal });
    res.status(201).json(desvinculacionDet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el detalle de desvinculación' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { desvinculacionCabId, conceptosRrhhId, cantidad, montoTotal } = req.body;
    const desvinculacionDet = await DesvinculacionDet.findByPk(id);
    if (desvinculacionDet) {
      await desvinculacionDet.update({ desvinculacionCabId, conceptosRrhhId, cantidad, montoTotal });
      res.status(200).json(desvinculacionDet);
    } else {
      res.status(404).json({ error: 'Detalle de desvinculación no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el detalle de desvinculación' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
