const { TipoFamilia } = require('../models'); // Asegúrate de importar el modelo TipoFamilia

// Controlador para buscar todos los tipos de familia
const findAllTipoFamilia = async (req, res) => {
  try {
    const tiposFamilia = await TipoFamilia.findAll();
    res.json(tiposFamilia);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar los tipos de familia' });
  }
};

// Otros controladores relacionados con TipoFamilia se pueden agregar aquí, como crear, actualizar o eliminar registros.

module.exports = {
  findAllTipoFamilia,
  // Agrega otros controladores aquí según sea necesario
};
