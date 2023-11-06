const Empleado = require('../models/empleado.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un empleado por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    if (empleado) {
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el empleado por ID' });
  }
};

// Método para buscar todos los empleados
const findAll = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar empleados' });
  }
};

// Método para crear un nuevo empleado
const create = async (req, res) => {
  try {
    const { legajo, nroTarjeta, fechaIngreso, salarioActual, ...otrosCampos } = req.body;
    const empleado = await Empleado.create({ legajo, nroTarjeta, fechaIngreso, salarioActual, ...otrosCampos });
    res.status(201).json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
};

// Método para actualizar un empleado por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { legajo, nroTarjeta, fechaIngreso, salarioActual, ...otrosCampos } = req.body;
    const empleado = await Empleado.findByPk(id);
    if (empleado) {
      await empleado.update({ legajo, nroTarjeta, fechaIngreso, salarioActual, ...otrosCampos });
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};

// Método para buscar todos los empleados por empresa
const findAllByEmpresa = async (req, res) => {
  try {
    const { empresaId } = req.params;
    const empleados = await Empleado.findAll({ where: { empresaId } });
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar empleados por empresa' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findAllByEmpresa,
};
