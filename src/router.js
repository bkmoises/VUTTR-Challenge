const express = require('express');
const router = express.Router();
const controller = require('./controllers/toolsController');


// Listar todas as ferramentas
router.get('/tools', controller.getAllTools);
// Filtrar ferramentas utilizando uma busca por tag
router.get('/tools', (req, res) => res.send(req.query.name));
// Cadastrar uma nova ferramenta
router.post('/tools',);
// Remover uma ferramenta por ID
router.delete('/tools/:id');


module.exports = router;
