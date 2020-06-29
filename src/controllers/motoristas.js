var Motorista = require('../models/motoristas');
var Veiculos = require('../models/veiculos');
const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectID;

exports.test = (req, res) => {
    res.json('Teste de retorno');
};

//Adicionar ao BD
exports.create = (req, res) => {
    let motorista = new Motorista(
        {
            nome: req.body.nome,
            sobreNome: req.body.sobreNome,
            cpf: req.body.cpf,
            dataNascimento: req.body.dataNascimento,
            status: req.body.status,
            dataCadastro: new Date(),
            dataAtualizacao: new Date(),
            veiculos: req.body.veiculos
        }
    );
    motorista.save((error, motorista) => {
        if (error) console.error(error)
        res.json(motorista)
    })
};

exports.details = async (req, res) => {
    await Motorista.findById(req.params.id, (error, driver) => {
        if (error) console.error(error)
        res.json(driver)
    })
};

exports.detailsAll = async (req, res) => {
    await Motorista.find({}, (err, motoristas) => {
        if (err) console.error(err)
        res.json(motoristas);
    })
}

exports.update = async (req, res) => {
    await Motorista.findOneAndUpdate(req.params.id, {
        $set:
        {
            nome: req.body.nome,
            sobreNome: req.body.sobreNome,
            cpf: req.body.cpf,
            dataNascimento: req.body.dataNascimento,
            status: req.body.status,
            // dataCadastro: req.params.dataCadastro, --Data de cadastro normalmente não muda.
            dataAtualizacao: new Date()
        }
    }, { new: true }, (error, driver) => {
        if (error) console.error(error)
        res.json(driver)
    })
};

exports.delete = async (req, res) => {
    await Motorista.findOneAndRemove(req.params.id, (error, driver) => {
        if (error) console.error(error)
        res.json({ message: 'Motorista Deletado' });
    })
};

exports.updateveiculo = async (req, res) => {
    //buscar o id do veiculo, se existe faz o update
    Veiculos.findById(req.body.veiculoid).then(result => {
        if (!result) return res.status(404).send('Veiculo Não Encontrado')
        Motorista.findOneAndUpdate(req.params.id, {
            $set:
            {
                veiculos: req.body
            }
        }, { new: true }, (error, driver) => {
            if (error) console.error(error)
            res.json(driver)
        })
    })
};