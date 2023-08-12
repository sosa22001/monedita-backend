const express = require('express');
const crearClientes = require('../controllers/cliente.controller').crearClientes;
const obtenerClientes = require('../controllers/cliente.controller').obtenerClientes;
const eliminarCliente = require('../controllers/cliente.controller').eliminarCliente;
const route = express.Router();

route.post('/crearCliente', crearClientes);

route.get('/obtenerclientes', obtenerClientes);

route.get('/eliminar/:id',eliminarCliente);

module.exports = route;