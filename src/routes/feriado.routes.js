const Feriado = require('../models/feriado.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const feriado = await Feriado.findByPk(id);
    if (feriado) {
      res.status(200).json(feriado);
    } else {
      res.status(404).json({ error: 'Feriado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el feriado por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const feriados = await Feriado.findAll();
    res.status(200).json(feriados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar feriados' });
  }
};

const create = async (req, res) => {
  try {
    const { fecha, descripcion } = req.body;
    const feriado = await Feriado.create({
      fecha,
      descripcion,
    });
    res.status(201).json(feriado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el feriado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, descripcion } = req.body;
    const feriado = await Feriado.findByPk(id);
    if (feriado) {
      await feriado.update({
        fecha,
        descripcion,
      });
      res.status(200).json(feriado);
    } else {
      res.status(404).json({ error: 'Feriado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el feriado' });
  }
};

const deleteFeriado = async (req, res) => {
  try {
    const { id } = req.params;
    const feriado = await Feriado.findByPk(id);
    if (feriado) {
      await feriado.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Feriado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el feriado' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteFeriado,
};
