const express = require('express');
const router = express.Router();
const facturaModel = require('../models/facturas.js');

router.put('/:facturaId', (req, res) => {
    facturaModel.updateOne({
        _id: req.params.facturaId
    }, {
        nombreVendedor: req.body.nombreVendedor,
        direccionVendedor: req.body.direccionVendedor,
        nombreEmpresa: req.body.nombreEmpresa,
        nombreCliente: req.body.nombreCliente,
        rutCliente: req.body.rutCliente,
        giroCliente: req.body.giroCliente,
        telefonoCliente: req.body.telefonoCliente,
        emailCliente: req.body.emailCliente,
        direccionCliente: req.body.direccionCliente,
        comunaCliente: req.body.comunaCliente,
        ciudadCliente: req.body.ciudadCliente,
        items: req.body.items,
        precioNeto: req.body.precioNeto,
        precioFinal: req.body.precioFinal,
        iva: req.body.iva,
        terms: req.body.terms,
        descripcionFactura: req.body.descripcionFactura
    }, (err, result) => {
        if (err) {
            console.log('ERROR: ', err);
            res.status(500).json({ message: 'No se pudo actualizar la información.' })
        } else {
            console.log('La factura se ha actualiado con éxito.');
            res.status(200).json({ message: 'La factura se ha actualiado con éxito.' })
        }
    });

})
module.exports = router;