/**
 * Função de middleware para validar um campo específico no corpo da requisição.
 *
 * @param {string} fieldName - O nome do campo a ser validado.
 * @returns {function} - Retorna uma função de middleware que executa a validação do campo especificado.
 */
const validateField = (fieldName) => (req, res, next) => {
  const { body } = req;

  if (body[fieldName] === undefined) {
    return res.status(400).json({ message: `O campo ${fieldName} é requerido.` });
  }

  if (!body[fieldName]) {
    return res.status(400).json({ message: `O campo ${fieldName} não pode ser vazio.` });
  }

  next();
};

const validateFieldTitle = validateField('title');
const validateFieldLink = validateField('link');
const validateFieldDescription = validateField('description');
const validateFieldTags = validateField('tags');

module.exports = {
  validateFieldTitle,
  validateFieldLink,
  validateFieldDescription,
  validateFieldTags
};
