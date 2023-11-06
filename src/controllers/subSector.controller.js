const Sector = require('../models/sector.model'); // Asegúrate de importar el modelo SubSector y Sector
const SubSector = require('../models/subSector.model'); // Asegúrate de importar el modelo SubSector y Sector

// Controlador para buscar todas las SubSector
const findAllSubSector = async (req, res) => {
  try {
    const SubSector = await SubSector.findAll();
    res.status(200).json(SubSector);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las SubSector.' });
  }
};

// Controlador para buscar una subselección por su ID
const findSubSectorById = async (req, res) => {
  const { id } = req.params;
  try {
    const subSector = await SubSector.findByPk(id);
    if (!subSector) {
      res.status(404).json({ error: 'Subselección no encontrada.' });
    } else {
      res.status(200).json(subSector);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo recuperar la subselección.' });
  }
};

// Controlador para crear una nueva subselección
const create = async (req, res) => {
  const { descripcion, sectorId } = req.body;
  try {
    const sector = await Sector.findByPk(sectorId);
    if (!sector) {
      res.status(404).json({ error: 'Sector no encontrado.' });
    } else {
      const nuevaSubSector = await SubSector.create({ descripcion, sectorId });
      res.status(201).json(nuevaSubSector);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la subselección.' });
  }
};

// Controlador para actualizar una subselección existente
const update = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const subSector = await SubSector.findByPk(id);
    if (!subSector) {
      res.status(404).json({ error: 'Subselección no encontrada.' });
    } else {
      subSector.descripcion = descripcion;
      await subSector.save();
      res.status(200).json(subSector);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la subselección.' });
  }
};

// Controlador para buscar todas las SubSector de un sector
const findAllBySector = async (req, res) => {
  const { sectorId } = req.params;
  try {
    const SubSector = await SubSector.findAll({
      where: { sectorId },
      include: [{ model: Sector, as: 'sector' }],
    });
    res.status(200).json(SubSector);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron recuperar las SubSector del sector.' });
  }
};

module.exports = {
  findAllSubSector,
  findSubSectorById,
  create,
  update,
  findAllBySector,
};
