const { TipoEmpleado } = require('../models/tipoEmpleado.model'); // Asegúrate de importar el modelo TipoEmpleado

// Controlador para buscar un tipo de empleado por ID
const findTipoEmpleadoById = async (req, res) => {
  const { id } = req.params;

  try {
    const tipoEmpleado = await TipoEmpleado.findByPk(id);
    if (!tipoEmpleado) {
      res.status(404).json({ error: 'Tipo de empleado no encontrado' });
    } else {
      res.json(tipoEmpleado);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo encontrar el tipo de empleado por ID' });
  }
};

// Controlador para actualizar un tipo de empleado por ID
const updateTipoEmpleado = async (req, res) => {
  const { id } = req.params;
  const tipoEmpleadoData = req.body;

  try {
    const tipoEmpleado = await TipoEmpleado.findByPk(id);
    if (!tipoEmpleado) {
      return res.status(404).json({ error: 'Tipo de empleado no encontrado' });
    }

    await tipoEmpleado.update(tipoEmpleadoData);
    res.json(tipoEmpleado);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el tipo de empleado' });
  }
};

// Controlador para eliminar un tipo de empleado por ID
const deleteTipoEmpleado = async (req, res) => {
  const { id } = req.params;

  try {
    const tipoEmpleado = await TipoEmpleado.findByPk(id);
    if (!tipoEmpleado) {
      res.status(404).json({ error: 'Tipo de empleado no encontrado' });
    } else {
      await tipoEmpleado.destroy();
      res.json({ message: 'Tipo de empleado eliminado correctamente' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el tipo de empleado' });
  }
};

module.exports = {
  findTipoEmpleadoById,
  updateTipoEmpleado,
  deleteTipoEmpleado,
};