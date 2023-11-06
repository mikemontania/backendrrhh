const GrupoConcepto = require('../models/grupoConcepto.model');

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const grupoConcepto = await GrupoConcepto.findByPk(id);
    if (grupoConcepto) {
      res.status(200).json(grupoConcepto);
    } else {
      res.status(404).json({ error: 'Grupo de concepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el grupo de concepto por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const gruposConcepto = await GrupoConcepto.findAll();
    res.status(200).json(gruposConcepto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar los grupos de concepto' });
  }
};

const create = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const grupoConcepto = await GrupoConcepto.create({ descripcion });
    res.status(201).json(grupoConcepto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el grupo de concepto' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const grupoConcepto = await GrupoConcepto.findByPk(id);
    if (grupoConcepto) {
      await grupoConcepto.update({ descripcion });
      res.status(200).json(grupoConcepto);
    } else {
      res.status(404).json({ error: 'Grupo de concepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el grupo de concepto' });
  }
};

const deleteGrupoConcepto = async (req, res) => {
  try {
    const { id } = req.params;
    const grupoConcepto = await GrupoConcepto.findByPk(id);
    if (grupoConcepto) {
      await grupoConcepto.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Grupo de concepto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el grupo de concepto' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deleteGrupoConcepto,
};
