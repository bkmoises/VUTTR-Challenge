const express = require('express');
const router = express.Router();
const controller = require('./controllers/toolsController');


// Listar ferramentas 
router.get('/tools', controller.getTools);
// Cadastrar uma nova ferramenta
router.post('/tools',);
// Remover uma ferramenta por ID
router.delete('/tools/:id');


module.exports = router;
