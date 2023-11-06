const Localidad = require('../models/localidad.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const localidad = await Localidad.findByPk(id);
    if (localidad) {
      res.status(200).json(localidad);
    } else {
      res.status(404).json({ error: 'Localidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar localidad por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const localidades = await Localidad.findAll();
    res.status(200).json(localidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todas las localidades' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const localidad = await Localidad.create({ descripcion });
    res.status(201).json(localidad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la localidad' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const localidad = await Localidad.findByPk(id);
    if (localidad) {
      await localidad.update({ descripcion });
      res.status(200).json(localidad);
    } else {
      res.status(404).json({ error: 'Localidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la localidad' });
  }
};

const deleteLocalidad = async (req, res) => {
  try {
    const { id } = req.params;
    const localidad = await Localidad.findByPk(id);
    if (localidad) {
      await localidad.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Localidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la localidad' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteLocalidad,
};
