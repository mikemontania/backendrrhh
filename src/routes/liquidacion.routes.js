const LiquidacionCab = require('../models/liquidacionCab.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const liquidacion = await LiquidacionCab.findByPk(id);
    if (liquidacion) {
      res.status(200).json(liquidacion);
    } else {
      res.status(404).json({ error: 'Liquidación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar liquidación por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const liquidaciones = await LiquidacionCab.findAll();
    res.status(200).json(liquidaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar las liquidaciones' });
  }
};

const create = async (req, res) => {
  try {
    const {
      empleadosId,
      sucursalesId,
      empresasId,
      fecha,
      fechaDesde,
      fechaHasta,
      montoTotal,
      sectorId,
      subSectorId,
      usuario,
      anulado,
      fechaAnulacion,
      mes,
      anho,
      areaPagoId,
      cerrado,
      esPrestadorServicio,
      nroFactura,
      primerPago,
      segundoPago,
    } = req.body;
    const liquidacion = await LiquidacionCab.create({
      empleadosId,
      sucursalesId,
      empresasId,
      fecha,
      fechaDesde,
      fechaHasta,
      montoTotal,
      sectorId,
      subSectorId,
      usuario,
      anulado,
      fechaAnulacion,
      mes,
      anho,
      areaPagoId,
      cerrado,
      esPrestadorServicio,
      nroFactura,
      primerPago,
      segundoPago,
    });
    res.status(201).json(liquidacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la liquidación' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      empleadosId,
      sucursalesId,
      empresasId,
      fecha,
      fechaDesde,
      fechaHasta,
      montoTotal,
      sectorId,
      subSectorId,
      usuario,
      anulado,
      fechaAnulacion,
      mes,
      anho,
      areaPagoId,
      cerrado,
      esPrestadorServicio,
      nroFactura,
      primerPago,
      segundoPago,
    } = req.body;
    const liquidacion = await LiquidacionCab.findByPk(id);
    if (liquidacion) {
      await liquidacion.update({
        empleadosId,
        sucursalesId,
        empresasId,
        fecha,
        fechaDesde,
        fechaHasta,
        montoTotal,
        sectorId,
        subSectorId,
        usuario,
        anulado,
        fechaAnulacion,
        mes,
        anho,
        areaPagoId,
        cerrado,
        esPrestadorServicio,
        nroFactura,
        primerPago,
        segundoPago,
      });
      res.status(200).json(liquidacion);
    } else {
      res.status(404).json({ error: 'Liquidación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la liquidación' });
  }
};

const deleteLiquidacion = async (req, res) => {
  try {
    const { id } = req.params;
    const liquidacion = await LiquidacionCab.findByPk(id);
    if (liquidacion) {
      await liquidacion.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Liquidación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la liquidación' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteLiquidacion,
};
