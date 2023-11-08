const Horario = require('../models/horario.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const horario = await Horario.findByPk(id);
    if (horario) {
      res.status(200).json(horario);
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar horario por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const horarios = await Horario.findAll();
    res.status(200).json(horarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar los horarios' });
  }
};


// Controlador para buscar una SubSector por su ID
const findTurnoById = async (req, res) => {
  const { turnosId, subSectorId } = req.params;
  try {

    const condiciones = {
      turnosId: turnosId,
      subSectorId: subSectorId
    }

    const subSector = await Horario.findAll({ where: condiciones });
    console.log(subSector)
    if (!subSector) {
      res.status(404).json({ error: 'Horario no encontrada.' });
    } else {
      res.status(200).json(subSector);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la Horario.' });
  }
};


const create = async (req, res) => {
  try {
    const {
      horaDesde,
      horaHasta,
      tolerancia,
      sabEntrada,
      sabSalida,
      domEntrada,
      domSalida,
      rango,
      tolMin,
      tipo,
      subSectorId,
      turnoId,
    } = req.body;
    const horario = await Horario.create({
      horaDesde,
      horaHasta,
      tolerancia,
      sabEntrada,
      sabSalida,
      domEntrada,
      domSalida,
      rango,
      tolMin,
      tipo,
      subSectorId,
      turnoId,
    });
    res.status(201).json(horario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el horario' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      horaDesde,
      horaHasta,
      tolerancia,
      sabEntrada,
      sabSalida,
      domEntrada,
      domSalida,
      rango,
      tolMin,
      tipo,
      subSectorId,
      turnoId,
    } = req.body;
    const horario = await Horario.findByPk(id);
    if (horario) {
      await horario.update({
        horaDesde,
        horaHasta,
        tolerancia,
        sabEntrada,
        sabSalida,
        domEntrada,
        domSalida,
        rango,
        tolMin,
        tipo,
        subSectorId,
        turnoId,
      });
      res.status(200).json(horario);
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el horario' });
  }
};

const deleteHorario = async (req, res) => {
  try {
    const { id } = req.params;
    const horario = await Horario.findByPk(id);
    if (horario) {
      await horario.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Horario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el horario' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteHorario,
  findTurnoById
};
