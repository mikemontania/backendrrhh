const MotivosAusencias = require('../models/motivoAusencia.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const motivoAusencias = await MotivosAusencias.findByPk(id);
    if (motivoAusencias) {
      res.status(200).json(motivoAusencias);
    } else {
      res.status(404).json({ error: 'Motivo de ausencias no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar motivo de ausencias por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const motivosAusencias = await MotivosAusencias.findAll();
    res.status(200).json(motivosAusencias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los motivos de ausencias' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const motivoAusencias = await MotivosAusencias.create({ descripcion });
    res.status(201).json(motivoAusencias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el motivo de ausencias' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const motivoAusencias = await MotivosAusencias.findByPk(id);
    if (motivoAusencias) {
      await motivoAusencias.update({ descripcion });
      res.status(200).json(motivoAusencias);
    } else {
      res.status(404).json({ error: 'Motivo de ausencias no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el motivo de ausencias' });
  }
};

const deleteMotivoAusencias = async (req, res) => {
  try {
    const { id } = req.params;
    const motivoAusencias = await MotivosAusencias.findByPk(id);
    if (motivoAusencias) {
      await motivoAusencias.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Motivo de ausencias no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el motivo de ausencias' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteMotivoAusencias,
};
