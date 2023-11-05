const MotivosDespidos = require('../models/motivosDespidos.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const motivoDespido = await MotivosDespidos.findByPk(id);
    if (motivoDespido) {
      res.status(200).json(motivoDespido);
    } else {
      res.status(404).json({ error: 'Motivo de despido no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar motivo de despido por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const motivosDespidos = await MotivosDespidos.findAll();
    res.status(200).json(motivosDespidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los motivos de despido' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const motivoDespido = await MotivosDespidos.create({ descripcion });
    res.status(201).json(motivoDespido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el motivo de despido' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const motivoDespido = await MotivosDespidos.findByPk(id);
    if (motivoDespido) {
      await motivoDespido.update({ descripcion });
      res.status(200).json(motivoDespido);
    } else {
      res.status(404).json({ error: 'Motivo de despido no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el motivo de despido' });
  }
};

const deleteMotivoDespido = async (req, res) => {
  try {
    const { id } = req.params;
    const motivoDespido = await MotivosDespidos.findByPk(id);
    if (motivoDespido) {
      await motivoDespido.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Motivo de despido no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el motivo de despido' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteMotivoDespido,
};
