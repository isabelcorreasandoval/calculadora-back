const asyncHandler = require("express-async-handler")

const Gasto = require("../models/gastosModel")

const getMovimientos = (async (req, res) => {
    const movimientos = await Gasto.find({})
    res.status(200).json(movimientos)
})

const addMovimientos = asyncHandler(async (req, res) => {
    if(!req.body.descripcion) {
        res.status(400)
        throw new Error("Teclea la descripción")
    }

    if(!req.body.importe) {
        res.status(400)
        throw new Error("Teclea el importe")
    }

    const movimiento = await Gasto.create({
        descripcion: req.body.descripcion,
        importe: req.body.importe
    })

    if (movimiento){
        res.status(201).json(movimiento)
    }else {
        res.status(500)
        throw new Error("Hubo un error")
    }
})

const deleteMovimientos = asyncHandler(async(req, res) => {
    const movimiento = await Gasto.findById(req.params.id)

    if(!movimiento) {
        res.status(404)
        throw new Error("Gasto no encontrado")
    }else {
        await Gasto.deleteOne(movimiento)
        res.status(200).json({"mensaje": "Movimiento eliminado"})
    }
})

module.exports = {
    getMovimientos, addMovimientos, deleteMovimientos
}