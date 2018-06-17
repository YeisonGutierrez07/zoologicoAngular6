'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas

// middlewares de body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// configurar cabeceras y cors

//rutas body-parser

app.get('/probando', (re, res) =>{
    res.status(200).send({ message: 'Este es el metodo probando'})
})


module.exports = app;
