const { Op } = require('sequelize');
const Empresa = require('../models/empresa.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empresa = await Empresa.findByPk(id);
    if (empresa) {
      res.status(200).json(empresa);
    } else {
      res.status(404).json({ error: 'Empresa no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la Empresa por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.status(200).json(empresas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Empresas' });
  }
};

const create = async (req, res) => {
  try {
    const { razon_social, nombreComercial, ruc, telefono, email } = req.body;
    const empresa = await Empresa.create({
      razon_social,
      nombreComercial,
      ruc,
      telefono,
      email,
    });
    res.status(201).json(empresa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Empresa' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { razon_social, nombreComercial, ruc, telefono, email } = req.body;
    const empresa = await Empresa.findByPk(id);
    if (empresa) {
      await empresa.update({
        razon_social,
        nombreComercial,
        ruc,
        telefono,
        email,
      });
      res.status(200).json(empresa);
    } else {
      res.status(404).json({ error: 'Empresa no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Empresa' });
  }
};

const deleteEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const empresa = await Empresa.findByPk(id);
    if (empresa) {
      await empresa.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Empresa no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Empresa' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteEmpresa,
};
