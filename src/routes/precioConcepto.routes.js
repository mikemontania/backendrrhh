const PrecioConceptos = require('../models/precioConceptos.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const precioConceptos = await PrecioConceptos.findByPk(id);
    if (precioConceptos) {
      res.status(200).json(precioConceptos);
    } else {
      res.status(404).json({ error: 'PrecioConceptos no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar PrecioConceptos por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const precioConceptos = await PrecioConceptos.findAll();
    res.status(200).json(precioConceptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los PrecioConceptos' });
  }
};

const create = async (req, res) => {
  try {
    const { tipoDiaId, cantidadDesde, cantidadHasta, horaDesde, horaHasta, precio, subSectorConceptoId } = req.body;
    const precioConceptos = await PrecioConceptos.create({
      tipoDiaId,
      cantidadDesde,
      cantidadHasta,
      horaDesde,
      horaHasta,
      precio,
      subSectorConceptoId,
    });
    res.status(201).json(precioConceptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el PrecioConceptos' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipoDiaId, cantidadDesde, cantidadHasta, horaDesde, horaHasta, precio, subSectorConceptoId } = req.body;
    const precioConceptos = await PrecioConceptos.findByPk(id);
    if (precioConceptos) {
      await precioConceptos.update({
        tipoDiaId,
        cantidadDesde,
        cantidadHasta,
        horaDesde,
        horaHasta,
        precio,
        subSectorConceptoId,
      });
      res.status(200).json(precioConceptos);
    } else {
      res.status(404).json({ error: 'PrecioConceptos no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el PrecioConceptos' });
  }
};

const deletePrecioConceptos = async (req, res) => {
  try {
    const { id } = req.params;
    const precioConceptos = await PrecioConceptos.findByPk(id);
    if (precioConceptos) {
      await precioConceptos.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'PrecioConceptos no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el PrecioConceptos' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deletePrecioConceptos,
};
