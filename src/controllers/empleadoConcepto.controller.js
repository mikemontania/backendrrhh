const { Op } = require('sequelize');
const EmpleadoConceptos = require('../models/empleadoConceptos.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoConcepto = await EmpleadoConceptos.findByPk(id);
    if (empleadoConcepto) {
      res.status(200).json(empleadoConcepto);
    } else {
      res.status(404).json({ error: 'EmpleadoConcepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el EmpleadoConcepto por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const empleadoConceptos = await EmpleadoConceptos.findAll();
    res.status(200).json(empleadoConceptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoConceptos' });
  }
};

const create = async (req, res) => {
  try {
    const { empleadosId, conceptosId, activo, tipoConcepto } = req.body;
    const empleadoConcepto = await EmpleadoConceptos.create({ empleadosId, conceptosId, activo, tipoConcepto });
    res.status(201).json(empleadoConcepto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el EmpleadoConcepto' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { empleadosId, conceptosId, activo, tipoConcepto } = req.body;
    const empleadoConcepto = await EmpleadoConceptos.findByPk(id);
    if (empleadoConcepto) {
      await empleadoConcepto.update({ empleadosId, conceptosId, activo, tipoConcepto });
      res.status(200).json(empleadoConcepto);
    } else {
      res.status(404).json({ error: 'EmpleadoConcepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el EmpleadoConcepto' });
  }
};

const findAllByEmpresa = async (req, res) => {
  try {
    const { empresaId } = req.params;
    const empleadoConceptos = await EmpleadoConceptos.findAll({
      where: {
        empleadosId: {
          [Op.in]: sequelize.literal(`(SELECT id FROM empleados WHERE empresaId = ${empresaId})`),
        },
      },
    });
    res.status(200).json(empleadoConceptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoConceptos por empresa' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findAllByEmpresa,
};
