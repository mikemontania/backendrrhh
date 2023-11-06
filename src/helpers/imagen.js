const fs = require('fs').promises;
const path = require('path');
const { response } = require('express');
const Empresa = require('../models/empresa.model');
const Usuario = require('../models/usuario.model');
const Empleado = require('../models/empleado.model');


const borrarImagen = (path) => {
    if (fs.existsSync(path)) {
        // Borrar la imagen anterior
        fs.unlinkSync(path);
    }
}

const uploadImage = async (type, id, fileName) => {
    try {
        let oldPath = '';

        switch (type) {
            case 'empresa':
                const q = await Empresa.findByPk(id);
                if (!q) {
                    console.log('No es una pregunta por id');
                    return false;
                }

                oldPath = `./uploads/empresas/${q.img}`;
                deleteImage(oldPath);
                q.img = fileName;
                await q.save();
                return true;

            case 'usuario':
                const u = await Usuario.findByPk(id);
                if (!u) {
                    console.log('No es una opción por id');
                    return false;
                }

                oldPath = `./uploads/usuarios/${u.img}`;
                deleteImage(oldPath);
                u.img = fileName;
                await u.save();
                return true;

            case 'empleado':
                const e = await Empleado.findByPk(id);
                if (!e) {
                    console.log('No es un e por id');
                    return false;
                }

                oldPath = `./uploads/empleados/${e.img}`;
                deleteImage(oldPath);
                e.img = fileName;
                await e.save();
                return true;

            // Agregar más casos según sea necesario para otros tipos de actualizaciones

            default:
                console.log('Tipo no válido');
                return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
const getImage = async (req, res = response) => {
    try {
        const id = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL
        const usuario = await Usuario.findByPk(id);

        if (!usuario || !usuario.img) {
            return res.status(404).json({
                ok: false,
                msg: 'Imagen no encontrada'
            });
        }

        const imagePath = path.join(__dirname, `../uploads/usuarios/${usuario.img}`);
        res.sendFile(imagePath);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno, verifique log'
        });
    }
};

module.exports = {
    uploadImage,
    borrarImagen,
    getImage
};


