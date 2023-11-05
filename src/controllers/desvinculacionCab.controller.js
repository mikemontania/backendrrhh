const DesvinculacionCab = require('../models/desvinculacionCab.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un registro por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const desvinculacion = await DesvinculacionCab.findByPk(id);
    if (desvinculacion) {
      res.status(200).json(desvinculacion);
    } else {
      res.status(404).json({ error: 'Desvinculación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la desvinculación por ID' });
  }
};

// Método para buscar todos los registros
const findAll = async (req, res) => {
  try {
    const desvinculaciones = await DesvinculacionCab.findAll();
    res.status(200).json(desvinculaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar desvinculaciones' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const { empleadosId, empresasId, fecha, montoDebito, montoCredito, montoNeto, usuario, mes } = req.body;
    const desvinculacion = await DesvinculacionCab.create({ empleadosId, empresasId, fecha, montoDebito, montoCredito, montoNeto, usuario, mes });
    res.status(201).json(desvinculacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la desvinculación' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { empleadosId, empresasId, fecha, montoDebito, montoCredito, montoNeto, usuario, mes } = req.body;
    const desvinculacion = await DesvinculacionCab.findByPk(id);
    if (desvinculacion) {
      await desvinculacion.update({ empleadosId, empresasId, fecha, montoDebito, montoCredito, montoNeto, usuario, mes });
      res.status(200).json(desvinculacion);
    } else {
      res.status(404).json({ error: 'Desvinculación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la desvinculación' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
