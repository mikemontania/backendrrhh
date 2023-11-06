const { TipoEmpleado } = require('../models'); // Asegúrate de importar el modelo TipoEmpleado

// Controlador para buscar todos los tipos de empleados
const findAllTipoEmpleados = async (req, res) => {
  try {
    const tipoEmpleados = await TipoEmpleado.findAll();
    res.json(tipoEmpleados);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar los tipos de empleados' });
  }
};

// Otros controladores relacionados con TipoEmpleado se pueden agregar aquí, como crear, actualizar o eliminar registros.

module.exports = {
  findAllTipoEmpleados,
  // Agrega otros controladores aquí según sea necesario
};
