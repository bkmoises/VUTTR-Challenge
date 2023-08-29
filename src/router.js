const express = require('express');
const router = express.Router();
const controller = require('./controllers/toolsController');
const middleware = require('./middlewares/toolsMiddlewares');


// Listar ferramentas 
router.get('/tools', controller.getTools);
// Cadastrar uma nova ferramenta
router.post('/tools',
  middleware.validateFieldTitle,
  middleware.validateFieldLink,
  middleware.validateFieldDescription,
  middleware.validateFieldTags,
  controller.createTool
);
// Remover uma ferramenta por ID
router.delete('/tools/:id', controller.deleteTool);
// Alterar uma ferramenta por ID
router.put('/tools/:id',
  middleware.validateFieldTitle,
  middleware.validateFieldLink,
  middleware.validateFieldDescription,
  middleware.validateFieldTags,
  controller.updateTool
);

module.exports = router;
