const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const { generarJWT } = require('../helpers/jwt-helper');
const Usuario = require('../models/usuario.model');
const Rol = require('../models/rol.model');

// Controlador para autenticar un usuario y generar un token JWT
const login = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario por nombre de usuario
    const user = await Usuario.findOne({
      where: {
        usuario: username,
        activo: true, // Puedes ajustar esta condición según tus necesidades
      },
    });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado',
      });
    }

    // Verificar la contraseña utilizando bcrypt
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña inválida',
      });
    }

    // Generar un token JWT con la información del usuario
    const token = await generarJWT(user.id);
    console.log('token', token)
    res.json({
      ok: true,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error interno, revisa los registros',
    });
  }
};

// Controlador para renovar un token JWT
const renewToken = async (req, res = response) => {
  try {
    // Obtener el token de la solicitud
    const tokenReq = req.headers.authorization.split(' ')[1];
    const { id } = jwt.verify(tokenReq, process.env.JWT_SECRET); // Asegúrate de ajustar el secreto JWT 
    // Generar un nuevo token JWT
    const tokenNew = await generarJWT(id);
    res.json({
      ok: true,
      token: tokenNew,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error interno, revisa los registros',
    });
  }
};

const updatePassword = async (req, res = response) => {
  try {
    const { username, password } = req.body;
    let us = await Usuario.findOne({
      where: { usuario: username },
      include: [{ model: Rol, as: 'role' }],
    });
    if (!us) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado',
      });
    }
    // Encriptar la contraseña con bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    us.password = hashedPassword;
    console.log('usuario con pass modificado');
    await us.save();
    res.status(200).json(us);
  } catch (error) {
    console.log('Error al buscar el usuario:', error); // Imprime el error específico
    res.status(500).json({
      ok: false,
      msg: error,
    });
  }
};


module.exports = {
  login,
  renewToken,
  updatePassword,
};
