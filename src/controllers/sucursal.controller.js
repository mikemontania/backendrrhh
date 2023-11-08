const Empresa = require('../models/empresa.model'); // Asegúrate de importar el modelo Sucursal y Empresa
const Sucursal = require('../models/sucursal.model'); // Asegúrate de importar el modelo Sucursal y Empresa
const { response } = require('express');


// Controlador para buscar todas las sucursales de una empresa
const findAll = async (req, res = response) => {
  const { empresaId } = req.user;
  try {
    const sucursales = await Sucursal.findAll({
      where: { empresasId: empresaId },
    });
    res.status(200).json(sucursales);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las sucursales de la empresa.' });
  }
};

// Controlador para buscar una sucursal por su ID
const findSucursalById = async (req, res) => {
  const { id } = req.params;
  try {
    const sucursal = await Sucursal.findByPk(id);
    if (!sucursal) {
      res.status(404).json({ error: 'Sucursal no encontrada.' });
    } else {
      res.status(200).json(sucursal);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la sucursal.' });
  }
};

// Controlador para crear una nueva sucursal
const createSucursal = async (req, res) => {
  const { descripcion, direccion, telefono, email, patronal, empresasId } = req.body;
  try {
    const empresa = await Empresa.findByPk(empresasId);
    if (!empresa) {
      res.status(404).json({ error: 'Empresa no encontrada.' });
    } else {
      const nuevaSucursal = await Sucursal.create({ descripcion, direccion, telefono, email, patronal, empresasId });
      res.status(201).json(nuevaSucursal);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la sucursal.' });
  }
};

// Controlador para actualizar una sucursal existente
const updateSucursal = async (req, res) => {
  const { id } = req.params;
  const { descripcion, direccion, telefono, email, patronal } = req.body;
  try {
    const sucursal = await Sucursal.findByPk(id);
    if (!sucursal) {
      res.status(404).json({ error: 'Sucursal no encontrada.' });
    } else {
      sucursal.descripcion = descripcion;
      sucursal.direccion = direccion;
      sucursal.telefono = telefono;
      sucursal.email = email;
      sucursal.patronal = patronal;
      await sucursal.save();
      res.status(200).json(sucursal);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la sucursal.' });
  }
};



module.exports = {
  findAll,
  findSucursalById,
  createSucursal,
  updateSucursal,
};
