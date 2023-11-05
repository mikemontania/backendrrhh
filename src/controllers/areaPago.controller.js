const AreaPago = require('../models/areaPago.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un registro por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const areaPago = await AreaPago.findByPk(id);
    if (areaPago) {
      res.status(200).json(areaPago);
    } else {
      res.status(404).json({ error: 'Área de pago no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el área de pago por ID' });
  }
};

// Método para buscar todos los registros (puedes agregar condiciones específicas según tu necesidad)
const findAll = async (req, res) => {
  try {
     const areasPago = await AreaPago.findAll( );
    res.status(200).json(areasPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar áreas de pago' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const areaPago = await AreaPago.create({ descripcion });
    res.status(201).json(areaPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el área de pago' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const areaPago = await AreaPago.findByPk(id);
    if (areaPago) {
      await areaPago.update({ descripcion });
      res.status(200).json(areaPago);
    } else {
      res.status(404).json({ error: 'Área de pago no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el área de pago' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
