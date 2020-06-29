const mongoose = require('mongoose')

const motoristaSchema = new mongoose.Schema({
  nome: { type: String },
  sobreNome: { type: String },
  cpf: { type: String },
  dataNascimento: { type: Date, default: Date.now },
  //Status inteiro para aguentar derivações, ativo, inativo, em ativação...
  status: { type: Number, default: 1 },
  dataCadastro: { type: Date, default: Date.now },
  dataAtualizacao: { type: Date, default: Date.now },
  veiculos: { type: Array, default: [] }
});

module.exports = mongoose.model('Motorista', motoristaSchema);
