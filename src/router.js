const express = require('express');
const router = express.Router();
const controller = require('./controllers/toolsController');


// Listar ferramentas 
router.get('/tools', controller.getTools);
// Cadastrar uma nova ferramenta
router.post('/tools', controller.createTool);
// Remover uma ferramenta por ID
router.delete('/tools/:id', controller.deleteTool);
// Alterar uma ferramenta por ID
router.put('/tools/:id', controller.updateTool);


module.exports = router;
