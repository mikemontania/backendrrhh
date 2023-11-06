const  TrabajoSemanal  = require('../models/trabajoSemanal.model'); // Asegúrate de importar el modelo TrabajoSemanal
const { Op } = require('sequelize');

// Función para buscar un registro por su ID
const findById = async (req, res) => {
  const { id } = req.params;

  try {
    const trabajoSemanal = await TrabajoSemanal.findByPk(id);
    if (!trabajoSemanal) {
      return res.status(404).json({ error: 'TrabajoSemanal no encontrado' });
    }

    res.json(trabajoSemanal);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo encontrar el TrabajoSemanal' });
  }
};

// Función para buscar registros con filtros opcionales
const findAll = async (req, res) => {
  const { empresasId, empleadosId, fechaSemana, liquidado, anulado } = req.query;
  const where = {};

  if (empresasId) {
    where.empresasId = empresasId;
  }

  if (empleadosId) {
    where.empleadosId = empleadosId;
  }

  if (fechaSemana) {
    where.fechaSemana = fechaSemana;
  }

  if (liquidado) {
    where.liquidado = liquidado;
  }

  if (anulado) {
    where.anulado = anulado;
  }

  try {
    const trabajosSemanal = await TrabajoSemanal.findAll({ where });
    res.json(trabajosSemanal);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar los registros de TrabajoSemanal' });
  }
};

// Función para crear un nuevo registro
const create = async (req, res) => {
  const trabajoSemanalData = req.body;

  try {
    const trabajoSemanal = await TrabajoSemanal.create(trabajoSemanalData);
    res.status(201).json(trabajoSemanal);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el TrabajoSemanal' });
  }
};

// Función para actualizar un registro por su ID
const update = async (req, res) => {
  const { id } = req.params;
  const trabajoSemanalData = req.body;

  try {
    const trabajoSemanal = await TrabajoSemanal.findByPk(id);
    if (!trabajoSemanal) {
      return res.status(404).json({ error: 'TrabajoSemanal no encontrado' });
    }

    await trabajoSemanal.update(trabajoSemanalData);
    res.json(trabajoSemanal);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el TrabajoSemanal' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
