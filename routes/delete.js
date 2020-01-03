const express = require('express');
const router = express.Router();
const facturaModel = require('../models/facturas.js');

router.delete('/:facturaId', (req, res) => {
    facturaModel.deleteOne({
        _id: req.params.facturaId
    }, (err) => {
        if (err) {
            console.log('ERROR: ', err);
            res.status(500).json({ message: 'No se pudo eliminar la factura.' })
        } else {
            console.log('La factura se ha eliminado con éxito.');
            res.status(200).json({ message: 'La factura se ha eliminado con éxito.' })
        }
    })
})
module.exports = router;