const PorcentajeIps = require('../models/porcentajeIps.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const porcentajeIps = await PorcentajeIps.findByPk(id);
    if (porcentajeIps) {
      res.status(200).json(porcentajeIps);
    } else {
      res.status(404).json({ error: 'PorcentajeIps no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar PorcentajeIps por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const porcentajesIps = await PorcentajeIps.findAll();
    res.status(200).json(porcentajesIps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los PorcentajeIps' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion, porcentaje } = req.body;
    const porcentajeIps = await PorcentajeIps.create({
      descripcion,
      porcentaje,
    });
    res.status(201).json(porcentajeIps);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el PorcentajeIps' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, porcentaje } = req.body;
    const porcentajeIps = await PorcentajeIps.findByPk(id);
    if (porcentajeIps) {
      await porcentajeIps.update({
        descripcion,
        porcentaje,
      });
      res.status(200).json(porcentajeIps);
    } else {
      res.status(404).json({ error: 'PorcentajeIps no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el PorcentajeIps' });
  }
};

const deletePorcentajeIps = async (req, res) => {
  try {
    const { id } = req.params;
    const porcentajeIps = await PorcentajeIps.findByPk(id);
    if (porcentajeIps) {
      await porcentajeIps.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'PorcentajeIps no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el PorcentajeIps' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deletePorcentajeIps,
};
