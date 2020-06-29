const mongoose = require('mongoose')

const veiculosSchema = new mongoose.Schema({
  nomeProprietario: { type: String },
  placa: { type: String },
  renavam: { type: Number, min: 00000000000, max: 99999999999 }
});

module.exports = mongoose.model('Veiculos', veiculosSchema);