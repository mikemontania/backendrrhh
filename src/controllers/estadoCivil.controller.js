const EstadoCivil = require('../models/estadoCivil.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoCivil = await EstadoCivil.findByPk(id);
    if (estadoCivil) {
      res.status(200).json(estadoCivil);
    } else {
      res.status(404).json({ error: 'Estado civil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el estado civil por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const estadosCiviles = await EstadoCivil.findAll();
    res.status(200).json(estadosCiviles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar estados civiles' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const estadoCivil = await EstadoCivil.create({
      descripcion,
    });
    res.status(201).json(estadoCivil);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el estado civil' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const estadoCivil = await EstadoCivil.findByPk(id);
    if (estadoCivil) {
      await estadoCivil.update({
        descripcion,
      });
      res.status(200).json(estadoCivil);
    } else {
      res.status(404).json({ error: 'Estado civil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el estado civil' });
  }
};

const deleteEstadoCivil = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoCivil = await EstadoCivil.findByPk(id);
    if (estadoCivil) {
      await estadoCivil.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Estado civil no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el estado civil' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteEstadoCivil,
};
