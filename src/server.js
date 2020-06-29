const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const env = require('dotenv').config();

app.use(cors());
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importa rotas
const motoristas = require('./routes/motoristas'); // Importa rota
const veiculos = require('./routes/veiculos'); // Importa rota
app.use('/', motoristas);

//Acesso a BD
console.log('Conectando ao banco de dados');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection
db.once('open', _ => {
    console.log('Banco conectado:')
})

db.on('error', err => {
    console.error('Erro de conexão:')
})

//Servidor
app.use('/motoristas', motoristas);
app.use('/veiculos', veiculos);

const port = 3000;
app.listen(port, () => {
    console.log('Servidor em execução na porta ' + port);
});
