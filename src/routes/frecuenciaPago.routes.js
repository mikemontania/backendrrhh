const FrecuenciaPago = require('../models/frecuenciaPago.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const frecuenciaPago = await FrecuenciaPago.findByPk(id);
    if (frecuenciaPago) {
      res.status(200).json(frecuenciaPago);
    } else {
      res.status(404).json({ error: 'Frecuencia de pago no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la frecuencia de pago por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const frecuenciasPago = await FrecuenciaPago.findAll();
    res.status(200).json(frecuenciasPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar las frecuencias de pago' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const frecuenciaPago = await FrecuenciaPago.create({ descripcion });
    res.status(201).json(frecuenciaPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la frecuencia de pago' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const frecuenciaPago = await FrecuenciaPago.findByPk(id);
    if (frecuenciaPago) {
      await frecuenciaPago.update({ descripcion });
      res.status(200).json(frecuenciaPago);
    } else {
      res.status(404).json({ error: 'Frecuencia de pago no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la frecuencia de pago' });
  }
};

const deleteFrecuenciaPago = async (req, res) => {
  try {
    const { id } = req.params;
    const frecuenciaPago = await FrecuenciaPago.findByPk(id);
    if (frecuenciaPago) {
      await frecuenciaPago.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Frecuencia de pago no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la frecuencia de pago' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteFrecuenciaPago,
};
