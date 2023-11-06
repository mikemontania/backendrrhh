const   Sector  = require('../models/sector.model'); // Asegúrate de importar el modelo SubSector y Sector
const   SubSector  = require('../models/subSector.model'); // Asegúrate de importar el modelo SubSector y Sector
 
// Controlador para buscar todas las subselecciones
const findAllSubSelecciones = async (req, res) => {
  try {
    const subselecciones = await SubSector.findAll();
    res.status(200).json(subselecciones);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las subselecciones.' });
  }
};

// Controlador para buscar una subselección por su ID
const findSubSeleccionById = async (req, res) => {
  const { id } = req.params;
  try {
    const subseleccion = await SubSector.findByPk(id);
    if (!subseleccion) {
      res.status(404).json({ error: 'Subselección no encontrada.' });
    } else {
      res.status(200).json(subseleccion);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la subselección.' });
  }
};

// Controlador para crear una nueva subselección
const createSubSeleccion = async (req, res) => {
  const { descripcion, sectorId } = req.body;
  try {
    const sector = await Sector.findByPk(sectorId);
    if (!sector) {
      res.status(404).json({ error: 'Sector no encontrado.' });
    } else {
      const nuevaSubSeleccion = await SubSector.create({ descripcion, sectorId });
      res.status(201).json(nuevaSubSeleccion);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la subselección.' });
  }
};

// Controlador para actualizar una subselección existente
const updateSubSeleccion = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const subseleccion = await SubSector.findByPk(id);
    if (!subseleccion) {
      res.status(404).json({ error: 'Subselección no encontrada.' });
    } else {
      subseleccion.descripcion = descripcion;
      await subseleccion.save();
      res.status(200).json(subseleccion);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la subselección.' });
  }
};

// Controlador para buscar todas las subselecciones de un sector
const findAllBySector = async (req, res) => {
  const { sectorId } = req.params;
  try {
    const subselecciones = await SubSector.findAll({
      where: { sectorId },
      include: [{ model: Sector, as: 'sector' }],
    });
    res.status(200).json(subselecciones);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las subselecciones del sector.' });
  }
};

module.exports = {
  findAllSubSelecciones,
  findSubSeleccionById,
  createSubSeleccion,
  updateSubSeleccion,
  findAllBySector,
};
