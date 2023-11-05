const Categoria = require('../models/categoria.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la categoría por ID' });
  }
};

// Método para buscar todas las categorías
const findAll = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar categorías' });
  }
};

// Método para crear una nueva categoría
const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const categoria = await Categoria.create({ descripcion });
    res.status(201).json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la categoría' });
  }
};

// Método para actualizar una categoría por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.update({ descripcion });
      res.status(200).json(categoria);
    } else {
      res.status(404).json({ error: 'Categoría no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la categoría' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
