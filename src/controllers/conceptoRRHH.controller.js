const ConceptosRRHH = require('../models/conceptoRRHH.model'); // Asegúrate de que la importación del modelo sea correcta
const { sequelize } = require('../../dbconfig');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const conceptoRRHH = await ConceptosRRHH.findByPk(id);
    if (conceptoRRHH) {
      res.status(200).json(conceptoRRHH);
    } else {
      res.status(404).json({ error: 'Concepto de Recursos Humanos no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el Concepto de Recursos Humanos por ID' });
  }
};

// Método para buscar todos los conceptos de RRHH
const findAll = async (req, res) => {
  try {
    const conceptosRRHH = await ConceptosRRHH.findAll();
    res.status(200).json(conceptosRRHH);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar Conceptos de Recursos Humanos' });
  }
};

// Método para crear un nuevo concepto de RRHH
const create = async (req, res) => {
  try {
    const { descripcion, tipoOperacion, mostrar, esPrestamo, esAjuste, afectaIps, cuentaCCCodigo, debeHaber, esAnticipo, grupoId, conceptoValor, orden, aguinaldo } = req.body;
    const conceptoRRHH = await ConceptosRRHH.create({ descripcion, tipoOperacion, mostrar, esPrestamo, esAjuste, afectaIps, cuentaCCCodigo, debeHaber, esAnticipo, grupoId, conceptoValor, orden, aguinaldo });
    res.status(201).json(conceptoRRHH);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el Concepto de Recursos Humanos' });
  }
};

// Método para actualizar un concepto de RRHH por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, tipoOperacion, mostrar, esPrestamo, esAjuste, afectaIps, cuentaCCCodigo, debeHaber, esAnticipo, grupoId, conceptoValor, orden, aguinaldo } = req.body;
    const conceptoRRHH = await ConceptosRRHH.findByPk(id);
    if (conceptoRRHH) {
      await conceptoRRHH.update({ descripcion, tipoOperacion, mostrar, esPrestamo, esAjuste, afectaIps, cuentaCCCodigo, debeHaber, esAnticipo, grupoId, conceptoValor, orden, aguinaldo });
      res.status(200).json(conceptoRRHH);
    } else {
      res.status(404).json({ error: 'Concepto de Recursos Humanos no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el Concepto de Recursos Humanos' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
};
