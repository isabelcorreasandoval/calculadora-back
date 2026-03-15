const express = require('express')
const router = express.Router()

const { getMovimientos, addMovimientos, deleteMovimientos} = require('../controllers/movimientosControllers')

//obtener movimientos 
router.get('/', getMovimientos)

//agregar movimientos 
router.post('/', addMovimientos)

//Borrar movimientos 
router.delete('/:id', deleteMovimientos)

module.exports = router