const Nacionalidad = require('../models/nacionalidad.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const nacionalidad = await Nacionalidad.findByPk(id);
    if (nacionalidad) {
      res.status(200).json(nacionalidad);
    } else {
      res.status(404).json({ error: 'Nacionalidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar nacionalidad por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const nacionalidades = await Nacionalidad.findAll();
    res.status(200).json(nacionalidades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todas las nacionalidades' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const nacionalidad = await Nacionalidad.create({ descripcion });
    res.status(201).json(nacionalidad);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la nacionalidad' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const nacionalidad = await Nacionalidad.findByPk(id);
    if (nacionalidad) {
      await nacionalidad.update({ descripcion });
      res.status(200).json(nacionalidad);
    } else {
      res.status(404).json({ error: 'Nacionalidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la nacionalidad' });
  }
};

const deleteNacionalidad = async (req, res) => {
  try {
    const { id } = req.params;
    const nacionalidad = await Nacionalidad.findByPk(id);
    if (nacionalidad) {
      await nacionalidad.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Nacionalidad no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la nacionalidad' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteNacionalidad,
};
