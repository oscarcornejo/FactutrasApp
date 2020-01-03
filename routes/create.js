const express = require('express');
const router = express.Router();
const facturaModel = require('../models/facturas.js');

router.post('/', (req, res) => {
    const input = req.body;
    const newDocument = new facturaModel({

        nombreVendedor: input.nombreVendedor,
        direccionVendedor: input.direccionVendedor,
        nombreEmpresa: input.nombreEmpresa,
        nombreCliente: input.nombreCliente,
        rutCliente: input.rutCliente,
        giroCliente: input.giroCliente,
        telefonoCliente: input.telefonoCliente,
        emailCliente: input.emailCliente,
        direccionCliente: input.direccionCliente,
        comunaCliente: input.comunaCliente,
        ciudadCliente: input.ciudadCliente,
        items: input.items,
        iva: input.iva,
        precioNeto: input.precioNeto,
        precioFinal: input.precioFinal,
        terms: input.terms,
        descripcionFactura: input.descripcionFactura
    });

    // GRABANDO EL DOCUMENTO
    newDocument.save((err, doc) => {
        if (err) {
            console.log('ERROR: ', err);
            res.status(500).json({ message: 'No se pudo grabar la información.' })
        } else {
            console.log('La factura se ha guardado con éxito.');
            res.status(200).json({ message: 'La factura se ha guardado con éxito.' })
        }
    });

})
module.exports = router;