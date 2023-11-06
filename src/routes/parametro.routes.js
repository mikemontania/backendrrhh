const Parametro = require('../models/parametro.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const parametro = await Parametro.findByPk(id);
    if (parametro) {
      res.status(200).json(parametro);
    } else {
      res.status(404).json({ error: 'Parámetro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar parámetro por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const parametros = await Parametro.findAll();
    res.status(200).json(parametros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los parámetros' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion, valor, operacion, empresasId } = req.body;
    const parametro = await Parametro.create({ descripcion, valor, operacion, empresasId });
    res.status(201).json(parametro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el parámetro' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, valor, operacion, empresasId } = req.body;
    const parametro = await Parametro.findByPk(id);
    if (parametro) {
      await parametro.update({ descripcion, valor, operacion, empresasId });
      res.status(200).json(parametro);
    } else {
      res.status(404).json({ error: 'Parámetro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el parámetro' });
  }
};

const deleteParametro = async (req, res) => {
  try {
    const { id } = req.params;
    const parametro = await Parametro.findByPk(id);
    if (parametro) {
      await parametro.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Parámetro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el parámetro' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteParametro,
};
