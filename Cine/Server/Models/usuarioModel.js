const mongoose = require('mongoose')

// DEFINIR LA ESTRUCTURA DEL DOCUMENTO QUE SE VA A CREAR
const usuarioSchema = mongoose.Schema({
    DNI: {
        type: Number,
        required: true
    }, 
    nombres: {
        type: String,
        required: true
    }, 
    apellidos: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    nombre_usuario: {
        type: String,
        required: true,
        uniqued: true
    },
    cliente: {
        type: String
    }
})
const Usuario = mongoose.model("Usuario", usuarioSchema)
module.exports = Usuario