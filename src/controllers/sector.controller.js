const { response } = require('express');
const Sector = require('../models/sector.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = await Sector.findByPk(id);
    if (sector) {
      res.status(200).json(sector);
    } else {
      res.status(404).json({ error: 'Sector no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Sector por ID' });
  }
};

const findAll = async (req, res = response) => {
  try {
    const { empresaId } = req.user;
    const sectores = await Sector.findAll({ where: { empresasId: empresaId } });
    res.status(200).json(sectores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los Sectores' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion, es_comercial, sucursalesId, empresasId } = req.body;
    const sector = await Sector.create({ descripcion, es_comercial, sucursalesId, empresasId });
    res.status(201).json(sector);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Sector' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, es_comercial, sucursalesId, empresasId } = req.body;
    const sector = await Sector.findByPk(id);
    if (sector) {
      await sector.update({ descripcion, es_comercial, sucursalesId, empresasId });
      res.status(200).json(sector);
    } else {
      res.status(404).json({ error: 'Sector no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Sector' });
  }
};

const deleteSector = async (req, res) => {
  try {
    const { id } = req.params;
    const sector = await Sector.findByPk(id);
    if (sector) {
      await sector.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Sector no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el Sector' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteSector,
};
