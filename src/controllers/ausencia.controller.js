const Ausencia = require('../models/ausencia.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un registro por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const ausencia = await Ausencia.findByPk(id);
    if (ausencia) {
      res.status(200).json(ausencia);
    } else {
      res.status(404).json({ error: 'Ausencia no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar la ausencia por ID' });
  }
};
// Método para buscar todos los registros por empresa (puedes agregar otras condiciones específicas según tu necesidad)
const findAllByEmpresa = async (req, res) => {
  try {
    const { empresasId } = req.params; // Asumiendo que pasas el ID de la empresa como parámetro en la URL
    const ausencias = await Ausencia.findAll({ where: { empresasId } });
    res.status(200).json(ausencias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar ausencias por empresa' });
  }
};
// Método para buscar todos los registros (puedes agregar condiciones específicas según tu necesidad)
const findAll = async (req, res) => {
  try {
    const ausencias = await Ausencia.findAll();
    res.status(200).json(ausencias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar ausencias' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    const {
      empleadosId,
      fechaDesde,
      fechaHasta,
      horaDesde,
      horaHasta,
      usuarioId,
      motivoId,
      comentario,
      fechaCarga,
      fechaRegreso,
      dias,
      fechaPago,
      monto,
      pagado,
      empresasId
    } = req.body;

    const ausencia = await Ausencia.create({
      empleadosId,
      fechaDesde,
      fechaHasta,
      horaDesde,
      horaHasta,
      usuarioId,
      motivoId,
      comentario,
      fechaCarga,
      fechaRegreso,
      dias,
      fechaPago,
      monto,
      pagado,
      empresasId
    });

    res.status(201).json(ausencia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la ausencia' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      empleadosId,
      fechaDesde,
      fechaHasta,
      horaDesde,
      horaHasta,
      usuarioId,
      motivoId,
      comentario,
      fechaCarga,
      fechaRegreso,
      dias,
      fechaPago,
      monto,
      pagado,
      empresasId
    } = req.body;

    const ausencia = await Ausencia.findByPk(id);
    if (ausencia) {
      await ausencia.update({
        empleadosId,
        fechaDesde,
        fechaHasta,
        horaDesde,
        horaHasta,
        usuarioId,
        motivoId,
        comentario,
        fechaCarga,
        fechaRegreso,
        dias,
        fechaPago,
        monto,
        pagado,
        empresasId
      });
      res.status(200).json(ausencia);
    } else {
      res.status(404).json({ error: 'Ausencia no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la ausencia' });
  }
};

module.exports = {
  findById,
  findAll,
  findAllByEmpresa,
  create,
  update,
};
