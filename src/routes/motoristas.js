const express = require('express');
const router = express.Router();
const motoristas_controller = require('../controllers/motoristas');

// teste simples
router.get('/testar', motoristas_controller.test);
//create
router.post('/create', motoristas_controller.create);
//listar
router.get('/id/:id', motoristas_controller.details);
router.get('/todos', motoristas_controller.detailsAll);
//update
router.put('/:id', motoristas_controller.update);
//delete
router.delete('/:id', motoristas_controller.delete);
//vincular veiculo ao motorista
router.put('/veiculos/:id', motoristas_controller.updateveiculo);

module.exports = router;
