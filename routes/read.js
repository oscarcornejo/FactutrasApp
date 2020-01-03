const express = require('express');
const router = express.Router();
const facturaModel = require('../models/facturas.js');

router.get('/all', (req, res) => {
    facturaModel.find((err, docs) => {
        if (err) {
            console.log('ERROR: ', err);
            res.status(500).json({ message: 'No se pudo obtener la información.' })
        } else {
            console.log('Datos obtenidos con éxito.');
            res.status(200).json(docs);
        }
    });
});

router.get('/:facturaId', (req, res) => {
    facturaModel.findOne({
        _id: req.params.facturaId
    }, (err, doc) => {
        if (err) {
            console.log('ERROR: ', err);
            res.status(500).json({ message: 'No se pudo encontrar la factura requerida.' })
        } else {
            console.log('Datos encontrados con éxito.');
            res.status(200).json(doc);
        }
    });
});

module.exports = router;