const HonorariosProfesionales = require('../models/honorarioProfesional.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const honorariosProfesionales = await HonorariosProfesionales.findByPk(id);
    if (honorariosProfesionales) {
      res.status(200).json(honorariosProfesionales);
    } else {
      res.status(404).json({ error: 'Honorarios profesionales no encontrados' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar honorarios profesionales por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const honorariosProfesionales = await HonorariosProfesionales.findAll();
    res.status(200).json(honorariosProfesionales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar los honorarios profesionales' });
  }
};

const create = async (req, res) => {
  try {
    const { fecha, monto, observacion, activo, empleadoId } = req.body;
    const honorariosProfesionales = await HonorariosProfesionales.create({
      fecha,
      monto,
      observacion,
      activo,
      empleadoId,
    });
    res.status(201).json(honorariosProfesionales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear los honorarios profesionales' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, monto, observacion, activo, empleadoId } = req.body;
    const honorariosProfesionales = await HonorariosProfesionales.findByPk(id);
    if (honorariosProfesionales) {
      await honorariosProfesionales.update({
        fecha,
        monto,
        observacion,
        activo,
        empleadoId,
      });
      res.status(200).json(honorariosProfesionales);
    } else {
      res.status(404).json({ error: 'Honorarios profesionales no encontrados' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar los honorarios profesionales' });
  }
};

const deleteHonorariosProfesionales = async (req, res) => {
  try {
    const { id } = req.params;
    const honorariosProfesionales = await HonorariosProfesionales.findByPk(id);
    if (honorariosProfesionales) {
      await honorariosProfesionales.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Honorarios profesionales no encontrados' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar los honorarios profesionales' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteHonorariosProfesionales,
};
