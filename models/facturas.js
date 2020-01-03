const mongoose = require('mongoose');

//SCHEMA
const facturasSchema = new mongoose.Schema({
    nombreVendedor: {
        type: String,
        require: true
    },
    direccionVendedor: {
        type: String,
        require: true
    },
    nombreEmpresa: {
        type: String,
        require: true
    },
    nombreCliente: {
        type: String,
        require: true
    },
    rutCliente: {
        type: String,
        require: true
    },
    giroCliente: {
        type: String,
        require: true
    },
    telefonoCliente: {
        type: Number,
        require: true
    },
    emailCliente: {
        type: String,
        require: true
    },
    direccionCliente: {
        type: String,
        require: true
    },
    comunaCliente: {
        type: String,
        require: true
    },
    ciudadCliente: {
        type: String,
        require: true
    },
    fechaFactura: {
        type: Date,
        default: Date.now
    },
    items: [{
        descripcion: {
            type: String,
            require: true
        },
        cantidad: {
            type: Number,
            require: true
        },
        precio: {
            type: Number,
            require: true
        }
    }],
    iva: {
        type: Number,
        require: true
    },
    precioNeto: {
        type: Number,
        require: true
    },
    precioFinal: {
        type: Number,
        require: true
    },
    terms: {
        type: String,
        require: true
    },
    descripcionFactura: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('factura', facturasSchema);