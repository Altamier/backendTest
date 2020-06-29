var Veiculos = require('../models/veiculos');

exports.test = (req, res) => {
    res.json({ message: 'Teste de retorno' });
};

//Adicionar ao BD
exports.create = (req, res) => {
    let veiculos = new Veiculos(
        {
            nomeProprietario: req.body.nomeProprietario,
            placa: req.body.placa,
            renavam: req.body.renavam
        }
    );
    veiculos.save((error, veiculos) => {
        if (error) console.error(error)
        res.json(veiculos)
    })
};

exports.details = async (req, res) => {
    await Veiculos.findById(req.params.id, (error, veiculos) => {
        if (error) console.error(error)
        res.json(veiculos)
    })
};

exports.update = async (req, res) => {
    console.log(req.body);
    await Veiculos.findOneAndUpdate(req.params.id, {
        $set:
        {
            nomeProprietario: req.body.nomeProprietario,
            placa: req.body.placa,
            renavam: req.body.renavam
        }
    }, { new: true }, (error, veiculos) => {
        if (error) console.error(error)
        res.json(veiculos)
    })
};

exports.delete = async (req, res) => {
    await Veiculos.findOneAndRemove(req.params.id, (error) => {
        if (error) console.error(error)
        res.json({ message: 'Veiculo Deletado' });
    })
};