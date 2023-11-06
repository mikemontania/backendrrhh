const { TipoDia } = require('../models'); // Asegúrate de importar el modelo TipoDia

// Controlador para buscar todos los tipos de días
const findAllTipoDias = async (req, res) => {
  try {
    const tipoDias = await TipoDia.findAll();
    res.json(tipoDias);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar los tipos de días' });
  }
};

// Otros controladores relacionados con TipoDia se pueden agregar aquí, como crear, actualizar o eliminar registros.

module.exports = {
  findAllTipoDias,
  // Agrega otros controladores aquí según sea necesario
};
