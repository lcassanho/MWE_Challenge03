const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lcassanho:221292@clusterluan.jhy2kt9.mongodb.net/db_products");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-access-token' )
    next();
});

// registrar a model
require('./models/product');

// registrar a rota
const productRouter = require('./routes/product-route');

// definir rota
app.use('/products', productRouter);

module.exports = app


