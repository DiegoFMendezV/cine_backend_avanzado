const express =  require('express')
const router = express.Router()
const usuarioController = require('../Controllers/UsuarioController')


router.get('/', usuarioController.getAllUsuarios)
router.get('/:id', usuarioController.getOneUsuario)
router.post('/', usuarioController.createUsuarios)
router.patch('/:id', usuarioController.updateUsuario)
router.delete('/:id', usuarioController.deleteUsuario)

module.exports = router