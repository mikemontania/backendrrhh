const jwt = require('jsonwebtoken');
const User = require('../models/usuario.model');
const Rol = require('../models/rol.model');
const generarJWT = async (id) => {

    try {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password', 'saltvalue', 'intento', 'activo', 'bloqueado', 'mail'] },
            include: [{ model: Rol, as: 'role' },
            ],
        }); const payload = {
            user: user
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });
        console.log(token)

        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Error generating JWT');
    }
};

module.exports = {
    generarJWT,
};
