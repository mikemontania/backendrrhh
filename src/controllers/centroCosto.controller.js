const CentroCosto = require('../models/centroCosto.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');
const { response } = require('express');

const findById = async (req, res) => {
  try {
    const { codigo } = req.params;
    const centroCosto = await CentroCosto.findByPk(codigo);
    if (centroCosto) {
      res.status(200).json(centroCosto);
    } else {
      res.status(404).json({ error: 'Centro de costo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el centro de costo por código' });
  }
};



// Método para buscar todos los centros de costo
const findAll = async (req, res = response) => {
  try {
    const { empresaId } = req.user; // Asumiendo que pasas el ID de la empresa como parámetro en la URL
    const centrosCosto = await CentroCosto.findAll({ where: { empresasId: empresaId } });
    const listConcat = await centrosCosto.map((c) => ({
      codigo: c.codigo, // Usar c en lugar de centrosCosto
      concat: `${c.codigo} - ${c.descripcion}`, // Usar c en lugar de centrosCosto
      descripcion: c.descripcion // Usar c en lugar de centrosCosto
    }));
    res.status(200).json(listConcat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar centros de costo' });
  }
};

// Método para crear un nuevo centro de costo
const create = async (req, res) => {
  try {
    const { codigo, descripcion, sucursalesId, empresasId } = req.body;
    const centroCosto = await CentroCosto.create({ codigo, descripcion, sucursalesId, empresasId });
    res.status(201).json(centroCosto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el centro de costo' });
  }
};

// Método para actualizar un centro de costo por código
const update = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { descripcion, sucursalesId, empresasId } = req.body;
    const centroCosto = await CentroCosto.findByPk(codigo);
    if (centroCosto) {
      await centroCosto.update({ descripcion, sucursalesId, empresasId });
      res.status(200).json(centroCosto);
    } else {
      res.status(404).json({ error: 'Centro de costo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el centro de costo' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
