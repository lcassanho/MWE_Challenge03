const mongoose = require('mongoose');
const repository = require('../repositories/product-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.post = async(req, res, next) => {
    try {
        repository.create(req.body);
        res.status(201).send({message: "Criado com sucesso!"});   
        } catch (error) {
        console.log(error);
    }
}

exports.put = async(req, res, next) => {
    const id = req.params.id
    const body = req.body;
    await repository.put(id, body);
    try {
        res.status(201).send({message: "Atualizado com sucesso!"});    
    } catch (error) {
        console.log(error);
    }
}

exports.getById = async(req, res, next) => {
    const id = req.params.id
    const data = await repository.getById(id);
    if (data == null) {
        res.status(404).send();
    } else {
        res.status(200).send(data);
    }
}

exports.delete = async(req, res, next) => {
    const id = req.params.id
    await repository.delete(id);
    res.status(200).send({message: "Removido com sucesso!"});
}

