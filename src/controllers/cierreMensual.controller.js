const CierreMensual = require('../models/cierreMensual.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const cierreMensual = await CierreMensual.findByPk(id);
    if (cierreMensual) {
      res.status(200).json(cierreMensual);
    } else {
      res.status(404).json({ error: 'Cierre mensual no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el cierre mensual por ID' });
  }
};

// Método para buscar todos los cierres mensuales por empresa (puedes agregar otras condiciones específicas según tu necesidad)
const findAllByEmpresa = async (req, res) => {
  try {
    const { empresasId } = req.params; // Asumiendo que pasas el ID de la empresa como parámetro en la URL
    const cierresMensuales = await CierreMensual.findAll({ where: { empresasId } });
    res.status(200).json(cierresMensuales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar cierres mensuales por empresa' });
  }
};

// Método para buscar todos los cierres mensuales
const findAll = async (req, res) => {
  try {
    const cierresMensuales = await CierreMensual.findAll();
    res.status(200).json(cierresMensuales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar cierres mensuales' });
  }
};

// Método para crear un nuevo cierre mensual
const create = async (req, res) => {
  try {
    const { fecha, mes, periodo, empresasId, anulado, notificado, cerrado, areaPagoId, sucursalId } = req.body;
    const cierreMensual = await CierreMensual.create({ fecha, mes, periodo, empresasId, anulado, notificado, cerrado, areaPagoId, sucursalId });
    res.status(201).json(cierreMensual);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el cierre mensual' });
  }
};

// Método para actualizar un cierre mensual por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, mes, periodo, empresasId, anulado, notificado, cerrado, areaPagoId, sucursalId } = req.body;
    const cierreMensual = await CierreMensual.findByPk(id);
    if (cierreMensual) {
      await cierreMensual.update({ fecha, mes, periodo, empresasId, anulado, notificado, cerrado, areaPagoId, sucursalId });
      res.status(200).json(cierreMensual);
    } else {
      res.status(404).json({ error: 'Cierre mensual no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el cierre mensual' });
  }
};

module.exports = {
  findById,
  findAll,
  findAllByEmpresa,
  create,
  update,
};
