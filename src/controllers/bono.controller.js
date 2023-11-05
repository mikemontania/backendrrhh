const Bonos = require('../models/bono.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const bono = await Bonos.findByPk(id);
    if (bono) {
      res.status(200).json(bono);
    } else {
      res.status(404).json({ error: 'Bono no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el bono por ID' });
  }
};

// Método para buscar todos los bonos por empleado (puedes agregar otras condiciones específicas según tu necesidad)
const findAllByEmpleado = async (req, res) => {
  try {
    const { empleadosId } = req.params; // Asumiendo que pasas el ID del empleado como parámetro en la URL
    const bonos = await Bonos.findAll({ where: { empleadosId } });
    res.status(200).json(bonos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar bonos por empleado' });
  }
};

// Método para buscar todos los registros
const findAll = async (req, res) => {
  try {
    const bonos = await Bonos.findAll();
    res.status(200).json(bonos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar bonos' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const { empleadosId, funcionario, empresasId, fecha, fechaCarga, usuario, monto, periodo } = req.body;
    const bono = await Bonos.create({ empleadosId, funcionario, empresasId, fecha, fechaCarga, usuario, monto, periodo });
    res.status(201).json(bono);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el bono' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { empleadosId, funcionario, empresasId, fecha, fechaCarga, usuario, monto, periodo } = req.body;
    const bono = await Bonos.findByPk(id);
    if (bono) {
      await bono.update({ empleadosId, funcionario, empresasId, fecha, fechaCarga, usuario, monto, periodo });
      res.status(200).json(bono);
    } else {
      res.status(404).json({ error: 'Bono no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el bono' });
  }
};

module.exports = {
  findById,
  findAll,
  findAllByEmpleado,
  create,
  update,
};
