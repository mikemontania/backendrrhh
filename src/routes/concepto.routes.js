const Concepto = require('../models/concepto.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const concepto = await Concepto.findByPk(id);
    if (concepto) {
      res.status(200).json(concepto);
    } else {
      res.status(404).json({ error: 'Concepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el concepto por ID' });
  }
};

// Método para buscar todos los conceptos
const findAll = async (req, res) => {
  try {
    const conceptos = await Concepto.findAll();
    res.status(200).json(conceptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar conceptos' });
  }
};

// Método para crear un nuevo concepto
const create = async (req, res) => {
  try {
    const { descripcion, tipoConcepto, conceptosrrhhId, mostrar } = req.body;
    const concepto = await Concepto.create({ descripcion, tipoConcepto, conceptosrrhhId, mostrar });
    res.status(201).json(concepto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el concepto' });
  }
};

// Método para actualizar un concepto por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, tipoConcepto, conceptosrrhhId, mostrar } = req.body;
    const concepto = await Concepto.findByPk(id);
    if (concepto) {
      await concepto.update({ descripcion, tipoConcepto, conceptosrrhhId, mostrar });
      res.status(200).json(concepto);
    } else {
      res.status(404).json({ error: 'Concepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el concepto' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
