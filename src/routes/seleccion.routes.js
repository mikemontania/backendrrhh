const  Seleccion  = require('../models/seleccion.model'); // Asegúrate de importar el modelo Seleccion

// Controlador para buscar todas las selecciones
const findAllSelecciones = async (req, res) => {
  try {
    const selecciones = await Seleccion.findAll();
    res.status(200).json(selecciones);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las selecciones.' });
  }
};

// Controlador para buscar una selección por su ID
const findSeleccionById = async (req, res) => {
  const { id } = req.params;
  try {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) {
      res.status(404).json({ error: 'Selección no encontrada.' });
    } else {
      res.status(200).json(seleccion);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la selección.' });
  }
};

// Controlador para crear una nueva selección
const createSeleccion = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const nuevaSeleccion = await Seleccion.create({ descripcion });
    res.status(201).json(nuevaSeleccion);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la selección.' });
  }
};

// Controlador para actualizar una selección existente
const updateSeleccion = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const seleccion = await Seleccion.findByPk(id);
    if (!seleccion) {
      res.status(404).json({ error: 'Selección no encontrada.' });
    } else {
      seleccion.descripcion = descripcion;
      await seleccion.save();
      res.status(200).json(seleccion);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la selección.' });
  }
};

module.exports = {
  findAllSelecciones,
  findSeleccionById,
  createSeleccion,
  updateSeleccion,
};
