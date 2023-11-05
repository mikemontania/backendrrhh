const DebitoCredito = require('../models/debitoCredito.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

// Método para buscar un registro por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const debitoCredito = await DebitoCredito.findByPk(id);
    if (debitoCredito) {
      res.status(200).json(debitoCredito);
    } else {
      res.status(404).json({ error: 'Débito/Crédito no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el Débito/Crédito por ID' });
  }
};

// Método para buscar todos los registros
const findAll = async (req, res) => {
  try {
    const debitosCreditos = await DebitoCredito.findAll();
    res.status(200).json(debitosCreditos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Débitos/Créditos' });
  }
};

// Método para crear un nuevo registro
const create = async (req, res) => {
  try {
    // Ajusta el cuerpo de la solicitud según los campos necesarios para crear un Débito/Crédito
    const { monto, conceptosRrhhId, fecha, fechaCarga, usuario, observacion, empleadosId, tipoPrestamo, cantCuotas, sectorId, subSectorId, periodo, anulado, fechaAnulacion, showroom, notificado, cerrado, pagado, fechaConcesion, saldoPrestamo, empresasId, cantidad } = req.body;

    const debitoCredito = await DebitoCredito.create({
      monto,
      conceptosRrhhId,
      fecha,
      fechaCarga,
      usuario,
      observacion,
      empleadosId,
      tipoPrestamo,
      cantCuotas,
      sectorId,
      subSectorId,
      periodo,
      anulado,
      fechaAnulacion,
      showroom,
      notificado,
      cerrado,
      pagado,
      fechaConcesion,
      saldoPrestamo,
      empresasId,
      cantidad,
    });

    res.status(201).json(debitoCredito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Débito/Crédito' });
  }
};

// Método para actualizar un registro por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    // Ajusta el cuerpo de la solicitud según los campos que deseas actualizar
    const { monto, conceptosRrhhId, fecha, fechaCarga, usuario, observacion, empleadosId, tipoPrestamo, cantCuotas, sectorId, subSectorId, periodo, anulado, fechaAnulacion, showroom, notificado, cerrado, pagado, fechaConcesion, saldoPrestamo, empresasId, cantidad } = req.body;

    const debitoCredito = await DebitoCredito.findByPk(id);
    if (debitoCredito) {
      await debitoCredito.update({
        monto,
        conceptosRrhhId,
        fecha,
        fechaCarga,
        usuario,
        observacion,
        empleadosId,
        tipoPrestamo,
        cantCuotas,
        sectorId,
        subSectorId,
        periodo,
        anulado,
        fechaAnulacion,
        showroom,
        notificado,
        cerrado,
        pagado,
        fechaConcesion,
        saldoPrestamo,
        empresasId,
        cantidad,
      });

      res.status(200).json(debitoCredito);
    } else {
      res.status(404).json({ error: 'Débito/Crédito no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Débito/Crédito' });
  }
};

// Método para buscar Débitos/Créditos relacionados con un Empleado específico
const findDebitoCreditoByEmpleado = async (req, res) => {
  try {
    const { empleadosId } = req.params;
    const debitosCreditos = await DebitoCredito.findAll({ where: { empleadosId } });
    res.status(200).json(debitosCreditos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Débitos/Créditos relacionados con el Empleado' });
  }
};

// Método para buscar Débitos/Créditos relacionados con un ConceptoRRHH específico
const findDebitoCreditoByConceptoRRHH = async (req, res) => {
  try {
    const { conceptosRrhhId } = req.params;
    const debitosCreditos = await DebitoCredito.findAll({ where: { conceptosRrhhId } });
    res.status(200).json(debitosCreditos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Débitos/Créditos relacionados con el Concepto RRHH' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  findDebitoCreditoByEmpleado,
  findDebitoCreditoByConceptoRRHH,
};
