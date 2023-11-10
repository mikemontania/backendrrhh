const Empleado = require('../models/empleado.model');
const Horario = require('../models/horario.model');
const Carrera = require('../models/carrera.model');
const EstadoCivil = require('../models/estadoCivil.model');
const Localidad = require('../models/localidad.model');
const Barrio = require('../models/barrio.model');
const Nacionalidad = require('../models/nacionalidad.model');
const Pais = require('../models/pais.model');
const Sector = require('../models/sector.model');
const SubSector = require('../models/subSector.model');
const CentroCosto = require('../models/centroCosto.model');
const FrecuenciaPago = require('../models/frecuenciaPago.model');
const Seleccion = require('../models/seleccion.model');
const TipoEmpleado = require('../models/tipoEmpleado.model');
const PorcentajeIps = require('../models/porcentajeIps.model');
const Categoria = require('../models/categoria.model');
const Empresa = require('../models/empresa.model');
const Sucursal = require('../models/sucursal.model');
const { sequelize } = require('../../dbconfig');
const { response } = require('express');
const Turno = require('../models/turno.model');
const SalarioDetalle = require('../models/salarioDetalle.model');
const HonorariosProfesionales = require('../models/honorarioProfesional.model');
// Método para buscar un empleado por ID
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id, {
      include: [
        { model: Empresa, as: 'empresa' },
        { model: Horario, as: 'horario' },
        { model: Carrera, as: 'carrera' },
        { model: Sector, as: 'sector' },
        { model: Categoria, as: 'categoria' },
        { model: EstadoCivil, as: 'estadoCivil' },
        { model: Localidad, as: 'localidad' },
        { model: Barrio, as: 'barrio' },
        { model: Nacionalidad, as: 'nacionalidad' },
        { model: Pais, as: 'pais' },
        { model: SubSector, as: 'subSector' },
        { model: CentroCosto, as: 'centroCosto' },
        { model: FrecuenciaPago, as: 'frecuenciaPago' },
        { model: Seleccion, as: 'seleccion' },
        { model: TipoEmpleado, as: 'tipoEmpleado' },
        { model: PorcentajeIps, as: 'porcentajeIps' },
        { model: Sucursal, as: 'sucursal' },
        { model: Turno, as: 'turno' },
      ],
    });

    if (empleado) {
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar el empleado por ID' });
  }
};

// Método para buscar todos los empleados
const findAll = async (req, res = response) => {
  // Obtén el usuario autenticado del objeto req
  const { empresaId } = req.user;

  // Obtén el parámetro opcional 'estado' de la solicitud
  const { activo } = req.params;

  try {
    let condition = { empresasId: empresaId };

    if (activo === 'S') {
      condition.activo = 'S';
    } else if (activo === 'N') {
      condition.activo = 'N';
    }
    // Si el activo no se proporciona, no se condiciona por activo.
    const empleados = await Empleado.findAll({ where: condition });
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar empleados' });
  }
};

const findAllConcat = async (req, res = response) => {
  // Obtén el usuario autenticado del objeto req
  const { empresaId } = req.user;

  // Obtén el parámetro opcional 'activo' de la solicitud
  const { activo } = req.params;

  try {
    let condition = { empresasId: empresaId };

    if (activo === 'S') {
      condition.activo = 'S';
    } else if (activo === 'N') {
      condition.activo = 'N';
    }

    // Define los campos que deseas seleccionar (id, nombre, ci)
    const attributes = ['id', 'nombre', 'ci'];

    const empleados = await Empleado.findAll({
      where: condition,
      attributes: attributes, // Selecciona los campos especificados
    });
    // Concatena "ci - nombre" para cada empleado
    const empleadosConcatenados = empleados.map((empleado) => ({
      id: empleado.id,
      concat: `${empleado.ci} - ${empleado.nombre} -  ${empleado.id}`,
    }));

    res.status(200).json(empleadosConcatenados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar empleados' });
  }
};
//metodos para descomprimir update y create
const handleDate = (date) => (date === "" ? null : date);
const createOrUpdateDetails = async (model, data, empleadoId) => {
  const formattedData = {
    id: data.id || null,
    fecha: handleDate(data.fecha),
    monto: data.monto,
    observacion: data.observacion,
    activo: data.activo,
    empleadoId,
  };

  try {
    if (formattedData.id) {
      await model.update(formattedData, { where: { id: formattedData.id } });
    } else {
      await model.create(formattedData);
    }
  } catch (error) {
    console.error(`Error en operación de ${model.name}:`, error);
  }
};
// Método para crear un nuevo empleado
const create = async (req, res) => {
  try {
    const { salariosDetalle, honorariosProfesionales } = req.body;

    req.body.empresasId = req.user.empresaId;
    req.body.fechaIngreso = handleDate(req.body.fechaIngreso)
    req.body.fechaSalida = handleDate(req.body.fechaSalida)
    req.body.ingresoIps = handleDate(req.body.ingresoIps)
    req.body.salidaIps = handleDate(req.body.salidaIps)
    req.body.fechaNacimiento = handleDate(req.body.fechaNacimiento)

    // Crear el nuevo registro en la tabla `empleados`.
    console.log(req.body)
    const empleadonuevo = await Empleado.create(req.body);

    const legajo = empleadonuevo.id;
    const nroTarjeta = 10000000 + empleadonuevo.id;
    empleadonuevo.update({ legajo, nroTarjeta })

    if (salariosDetalle) {
      await Promise.all(salariosDetalle.map((salario) => createOrUpdateDetails(SalarioDetalle, salario, empleadonuevo.id)));
    }

    if (honorariosProfesionales) {
      await Promise.all(honorariosProfesionales.map((honorario) => createOrUpdateDetails(HonorariosProfesionales, honorario, empleadonuevo.id)));
    }
    res.status(201).json(empleadonuevo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
};
// Método para actualizar un empleado por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { salariosDetalle, honorariosProfesionales } = req.body;

    req.body.empresasId = req.user.empresaId;
    req.body.fechaIngreso = handleDate(req.body.fechaIngreso)
    req.body.fechaSalida = handleDate(req.body.fechaSalida)
    req.body.ingresoIps = handleDate(req.body.ingresoIps)
    req.body.salidaIps = handleDate(req.body.salidaIps)
    req.body.fechaNacimiento = handleDate(req.body.fechaNacimiento)
    const empleado = await Empleado.findByPk(id);
    if (empleado) {
      await empleado.update(req.body);

      if (salariosDetalle) {
        await Promise.all(salariosDetalle.map((salario) => createOrUpdateDetails(SalarioDetalle, salario, empleado.id)));
      }

      if (honorariosProfesionales) {
        await Promise.all(honorariosProfesionales.map((honorario) => createOrUpdateDetails(HonorariosProfesionales, honorario, empleado.id)));
      }

      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};


module.exports = {
  findById,
  findAll,
  findAllConcat,
  create,
  update,
};
