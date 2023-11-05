const { Op } = require('sequelize');
const EmpleadoConceptosPrecio = require('../models/empleadoConceptosPrecio.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoConceptoPrecio = await EmpleadoConceptosPrecio.findByPk(id);
    if (empleadoConceptoPrecio) {
      res.status(200).json(empleadoConceptoPrecio);
    } else {
      res.status(404).json({ error: 'EmpleadoConceptoPrecio no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el EmpleadoConceptoPrecio por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const empleadoConceptosPrecios = await EmpleadoConceptosPrecio.findAll();
    res.status(200).json(empleadoConceptosPrecios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoConceptosPrecios' });
  }
};

const create = async (req, res) => {
  try {
    const { empleadoConceptosId, precio, horaDesde, horaHasta, cantidadDesde, cantidadHasta, tipoDiaId } = req.body;
    const empleadoConceptoPrecio = await EmpleadoConceptosPrecio.create({
      empleadoConceptosId,
      precio,
      horaDesde,
      horaHasta,
      cantidadDesde,
      cantidadHasta,
      tipoDiaId,
    });
    res.status(201).json(empleadoConceptoPrecio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el EmpleadoConceptoPrecio' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { empleadoConceptosId, precio, horaDesde, horaHasta, cantidadDesde, cantidadHasta, tipoDiaId } = req.body;
    const empleadoConceptoPrecio = await EmpleadoConceptosPrecio.findByPk(id);
    if (empleadoConceptoPrecio) {
      await empleadoConceptoPrecio.update({
        empleadoConceptosId,
        precio,
        horaDesde,
        horaHasta,
        cantidadDesde,
        cantidadHasta,
        tipoDiaId,
      });
      res.status(200).json(empleadoConceptoPrecio);
    } else {
      res.status(404).json({ error: 'EmpleadoConceptoPrecio no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el EmpleadoConceptoPrecio' });
  }
};

const findAllByEmpleadoConcepto = async (req, res) => {
  try {
    const { empleadoConceptosId } = req.params;
    const empleadoConceptosPrecios = await EmpleadoConceptosPrecio.findAll({
      where: { empleadoConceptosId },
    });
    res.status(200).json(empleadoConceptosPrecios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar EmpleadoConceptosPrecios por EmpleadoConcepto' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findAllByEmpleadoConcepto,
};
