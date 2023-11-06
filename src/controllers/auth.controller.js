const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('express');
const { generarJWT } = require('../helpers/jwt-helper');
const Usuario = require('../models/usuario.model');

// Controlador para autenticar un usuario y generar un token JWT
const login = async (req, res = response) => {
  const { usuario, password } = req.body;

  try {
    // Buscar el usuario por nombre de usuario
    const user = await Usuario.findOne({
      where: {
        usuario,
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
    const token = generarJWT(user.id);

    res.json({
      ok: true,
      token,
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
    const tokenNew = generarJWT(id);

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

// Controlador para actualizar la contraseña de un usuario
const updatePassword = async (req, res = response) => {
  try {
    const { usuario, password } = req.body;
    let user = await Usuario.findOne({ where: { usuario: usuario } });

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado',
      });
    }

    // Encriptar la contraseña con bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({
      ok: true,
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error interno, revisa los registros',
    });
  }
};

module.exports = {
  login,
  renewToken,
  updatePassword,
};
