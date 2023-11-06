// En tipoDiaController.js

const { TipoDia } = require('../models/tipoDia.model'); // Asegúrate de importar el modelo TipoDia

// Función para buscar un tipo de día por su ID
const findTipoDiaById = async (req, res) => {
  const { id } = req.params;

  try {
    const tipoDia = await TipoDia.findByPk(id);
    if (!tipoDia) {
      return res.status(404).json({ error: 'Tipo de día no encontrado' });
    }

    res.json(tipoDia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo encontrar el Tipo de día' });
  }
};

// Función para crear un nuevo tipo de día
const createTipoDia = async (req, res) => {
  const tipoDiaData = req.body;

  try {
    const tipoDia = await TipoDia.create(tipoDiaData);
    res.status(201).json(tipoDia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear el Tipo de día' });
  }
};

// Función para actualizar un tipo de día por su ID
const updateTipoDia = async (req, res) => {
  const { id } = req.params;
  const tipoDiaData = req.body;

  try {
    const tipoDia = await TipoDia.findByPk(id);
    if (!tipoDia) {
      return res.status(404).json({ error: 'Tipo de día no encontrado' });
    }

    await tipoDia.update(tipoDiaData);
    res.json(tipoDia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el Tipo de día' });
  }
};

// Función para eliminar un tipo de día por su ID
const deleteTipoDia = async (req, res) => {
  const { id } = req.params;

  try {
    const tipoDia = await TipoDia.findByPk(id);
    if (!tipoDia) {
      return res.status(404).json({ error: 'Tipo de día no encontrado' });
    }

    await tipoDia.destroy();
    res.json({ message: 'Tipo de día eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el Tipo de día' });
  }
};

module.exports = {
  findTipoDiaById,
  createTipoDia,
  updateTipoDia,
  deleteTipoDia,
};
