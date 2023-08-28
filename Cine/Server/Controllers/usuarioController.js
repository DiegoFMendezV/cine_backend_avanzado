const Usuario = require('../Models/usuarioModel')

exports.getAllUsuarios = async(req, res) =>{
   const usuarios = await Usuario.find()
   return res.status(200).json(usuarios)
}
exports.getOneUsuario = async(req, res) =>{
    const { id } = req.params;
    const usuario = await Usuario.findById(id)
    return res.status(200).json(usuario)
}
exports.createUsuarios = async (req, res) => {
    const newUsuario = new Usuario({...req.body})
    const insertedUsuario = await newUsuario.save()
    return res.status(201).json(insertedUsuario)
}
exports.updateUsuario = async(req, res)=>{
    const { id } = req.params;
    await Usuario.updateOne({_id: id}, {...req.body})
    const updatedUsuario = await Usuario.findById(id)
    return res.status(200).json(updatedUsuario)
}

exports.deleteUsuario = async(req, res) => {
   const { id } = req.params
   const usuarioToDelete = await Usuario.findByIdAndDelete(id)
   return res.status(202).json(usuarioToDelete)
}