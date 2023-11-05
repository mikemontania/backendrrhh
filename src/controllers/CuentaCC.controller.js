const CuentaCC = require('../models/CuentaCC.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { codigo } = req.params;
    const cuentaCC = await CuentaCC.findByPk(codigo);
    if (cuentaCC) {
      res.status(200).json(cuentaCC);
    } else {
      res.status(404).json({ error: 'Cuenta de Centro de Costo no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la Cuenta de Centro de Costo por código' });
  }
};

// Método para buscar todas las cuentas de Centro de Costo
const findAll = async (req, res) => {
  try {
    const cuentasCC = await CuentaCC.findAll();
    res.status(200).json(cuentasCC);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Cuentas de Centro de Costo' });
  }
};

// Método para crear una nueva cuenta de Centro de Costo
const create = async (req, res) => {
  try {
    const { codigo, descripcion, empresasId } = req.body;
    const cuentaCC = await CuentaCC.create({ codigo, descripcion, empresasId });
    res.status(201).json(cuentaCC);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la Cuenta de Centro de Costo' });
  }
};

// Método para actualizar una cuenta de Centro de Costo por código
const update = async (req, res) => {
  try {
    const { codigo } = req.params;
    const { descripcion, empresasId } = req.body;
    const cuentaCC = await CuentaCC.findByPk(codigo);
    if (cuentaCC) {
      await cuentaCC.update({ descripcion, empresasId });
      res.status(200).json(cuentaCC);
    } else {
      res.status(404).json({ error: 'Cuenta de Centro de Costo no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Cuenta de Centro de Costo' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
