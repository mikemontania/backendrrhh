const SalarioDetalle = require('../models/salarioDetalle.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const salarioDetalle = await SalarioDetalle.findByPk(id);
    if (salarioDetalle) {
      res.status(200).json(salarioDetalle);
    } else {
      res.status(404).json({ error: 'SalarioDetalle no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar SalarioDetalle por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const salarioDetalles = await SalarioDetalle.findAll();
    res.status(200).json(salarioDetalles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todos los SalarioDetalles' });
  }
};

const findHistorial = async (req, res) => {
  const { id } = req.params;
  try {
    const s = await SalarioDetalle.findAll({ where: { empleadoId: id } });
    res.status(200).json(s);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar los salarios' });
  }
};
const create = async (req, res) => {
  try {
    const { fecha, monto, observacion, empleadoId } = req.body;

    // Inactivar todos los salarios anteriores del empleado
    await SalarioDetalle.update(
      { activo: 'N' },
      { where: { empleadoId, activo: 'S' } }
    );

    // Crear el nuevo salario
    const salarioDetalle = await SalarioDetalle.create({
      fecha,
      monto,
      observacion,
      activo: 'S',
      empleadoId,
    });

    res.status(201).json(salarioDetalle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el SalarioDetalle' });
  }
};


const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha, monto, observacion, activo, empleadoId } = req.body;
    const salarioDetalle = await SalarioDetalle.findByPk(id);
    if (salarioDetalle) {
      await salarioDetalle.update({ fecha, monto, observacion, activo, empleadoId });
      res.status(200).json(salarioDetalle);
    } else {
      res.status(404).json({ error: 'SalarioDetalle no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el SalarioDetalle' });
  }
};

const deleteSalarioDetalle = async (req, res) => {
  try {
    const { id } = req.params;
    const salarioDetalle = await SalarioDetalle.findByPk(id);
    if (salarioDetalle) {
      await salarioDetalle.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'SalarioDetalle no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el SalarioDetalle' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteSalarioDetalle,
  findHistorial
};
