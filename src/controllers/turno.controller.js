const Turno = require('../models/turno.model'); // Asegúrate de ajustar la ruta al modelo si es necesario

// Controlador para obtener todos los turnos

const findAll = async (req, res = response) => {
  const { empresaId } = req.user;
  try {
    const turnos = await Turno.findAll({ where: { empresasId: empresaId } });
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las turnos de la empresa.' });
  }
};

// Controlador para obtener un turno por su ID
const getTurnoById = async (req, res) => {
  const { id } = req.params;

  try {
    const turno = await Turno.findByPk(id);
    if (!turno) {
      res.status(404).json({ error: 'Turno no encontrado' });
    } else {
      res.json(turno);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar el turno' });
  }
};

// Controlador para crear un nuevo turno
const createTurno = async (req, res) => {
  const { descripcion, tipo, empresasId } = req.body;

  try {
    const turno = await Turno.create({
      descripcion,
      tipo,
      empresasId,
    });
    res.status(201).json(turno);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el turno' });
  }
};

// Controlador para actualizar un turno por su ID
const updateTurno = async (req, res) => {
  const { id } = req.params;
  const { descripcion, tipo, empresasId } = req.body;

  try {
    const turno = await Turno.findByPk(id);
    if (!turno) {
      res.status(404).json({ error: 'Turno no encontrado' });
    } else {
      turno.descripcion = descripcion;
      turno.tipo = tipo;
      turno.empresasId = empresasId;
      await turno.save();
      res.json(turno);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el turno' });
  }
};

// Controlador para eliminar un turno por su ID
const deleteTurno = async (req, res) => {
  const { id } = req.params;

  try {
    const turno = await Turno.findByPk(id);
    if (!turno) {
      res.status(404).json({ error: 'Turno no encontrado' });
    } else {
      await turno.destroy();
      res.json({ message: 'Turno eliminado correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el turno' });
  }
};

module.exports = {
  findAll,
  getTurnoById,
  createTurno,
  updateTurno,
  deleteTurno,
};
