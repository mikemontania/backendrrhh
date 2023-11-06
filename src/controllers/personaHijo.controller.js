const PersonasHijos = require('../models/personaHijo.model');
const Empleado = require('../models/empleado.model'); // Asegúrate de importar el modelo Empleado
const EstadoCivil = require('../models/estadoCivil.model'); // Asegúrate de importar el modelo EstadoCivil

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const personaHijo = await PersonasHijos.findByPk(id, {
      include: [
        {
          model: Empleado,
          as: 'empleado',
        },
        {
          model: EstadoCivil,
          as: 'estadoCivil',
        },
      ],
    });
    if (personaHijo) {
      res.status(200).json(personaHijo);
    } else {
      res.status(404).json({ error: 'PersonaHijo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar personaHijo por ID' });
  }
};

const findAll = async (req, res) => {
  try {
    const personasHijos = await PersonasHijos.findAll({
      include: [
        {
          model: Empleado,
          as: 'empleado',
        },
        {
          model: EstadoCivil,
          as: 'estadoCivil',
        },
      ],
    });
    res.status(200).json(personasHijos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar todas las personasHijos' });
  }
};

const create = async (req, res) => {
  try {
    const {
      nombre,
      ci,
      sexo,
      fechaNacimiento,
      empleadosId,
      estadoCivilId,
    } = req.body;
    const personaHijo = await PersonasHijos.create({
      nombre,
      ci,
      sexo,
      fechaNacimiento,
      empleadosId,
      estadoCivilId,
    });
    res.status(201).json(personaHijo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la personaHijo' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      ci,
      sexo,
      fechaNacimiento,
      empleadosId,
      estadoCivilId,
    } = req.body;
    const personaHijo = await PersonasHijos.findByPk(id);
    if (personaHijo) {
      await personaHijo.update({
        nombre,
        ci,
        sexo,
        fechaNacimiento,
        empleadosId,
        estadoCivilId,
      });
      res.status(200).json(personaHijo);
    } else {
      res.status(404).json({ error: 'PersonaHijo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la personaHijo' });
  }
};

const deletePersonaHijo = async (req, res) => {
  try {
    const { id } = req.params;
    const personaHijo = await PersonasHijos.findByPk(id);
    if (personaHijo) {
      await personaHijo.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'PersonaHijo no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la personaHijo' });
  }
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  deletePersonaHijo,
};
