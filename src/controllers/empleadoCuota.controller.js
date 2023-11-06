const { Op } = require('sequelize');
const EmpleadoCuotas = require('../models/empleadoCuota.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoCuota = await EmpleadoCuotas.findByPk(id);
    if (empleadoCuota) {
      res.status(200).json(empleadoCuota);
    } else {
      res.status(404).json({ error: 'EmpleadoCuota no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la EmpleadoCuota por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const empleadoCuotas = await EmpleadoCuotas.findAll();
    res.status(200).json(empleadoCuotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoCuotas' });
  }
};

const create = async (req, res) => {
  try {
    const {
      empleadosId,
      montoCuota,
      nroCuota,
      cantCuotas,
      fechaCarga,
      fechaVencimiento,
      pagado,
      saldo,
      debitoCreditoId,
    } = req.body;
    const empleadoCuota = await EmpleadoCuotas.create({
      empleadosId,
      montoCuota,
      nroCuota,
      cantCuotas,
      fechaCarga,
      fechaVencimiento,
      pagado,
      saldo,
      debitoCreditoId,
    });
    res.status(201).json(empleadoCuota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la EmpleadoCuota' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      empleadosId,
      montoCuota,
      nroCuota,
      cantCuotas,
      fechaCarga,
      fechaVencimiento,
      pagado,
      saldo,
      debitoCreditoId,
    } = req.body;
    const empleadoCuota = await EmpleadoCuotas.findByPk(id);
    if (empleadoCuota) {
      await empleadoCuota.update({
        empleadosId,
        montoCuota,
        nroCuota,
        cantCuotas,
        fechaCarga,
        fechaVencimiento,
        pagado,
        saldo,
        debitoCreditoId,
      });
      res.status(200).json(empleadoCuota);
    } else {
      res.status(404).json({ error: 'EmpleadoCuota no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la EmpleadoCuota' });
  }
};

const findAllByEmpleado = async (req, res) => {
  try {
    const { empleadosId } = req.params;
    const empleadoCuotas = await EmpleadoCuotas.findAll({
      where: { empleadosId },
    });
    res.status(200).json(empleadoCuotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoCuotas por empleado' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findAllByEmpleado,
};
