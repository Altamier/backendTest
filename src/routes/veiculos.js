const express = require('express');
const router = express.Router();
const veiculos_controller = require('../controllers/veiculos');

// teste simples
router.get('/testar', veiculos_controller.test);

router.post('/create', veiculos_controller.create);
router.get('/:id', veiculos_controller.details);
router.put('/:id', veiculos_controller.update);
router.delete('/:id', veiculos_controller.delete);

module.exports = router;
