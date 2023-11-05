const Pais = require('../models/pais.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findByPk(id);
    if (pais) {
      res.status(200).json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar país por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const paises = await Pais.findAll();
    res.status(200).json(paises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los países' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const pais = await Pais.create({ descripcion });
    res.status(201).json(pais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el país' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const pais = await Pais.findByPk(id);
    if (pais) {
      await pais.update({ descripcion });
      res.status(200).json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el país' });
  }
};

const deletePais = async (req, res) => {
  try {
    const { id } = req.params;
    const pais = await Pais.findByPk(id);
    if (pais) {
      await pais.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'País no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el país' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deletePais,
};
