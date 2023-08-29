const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'O campo title é requerido.' });
  };

  if (!body.title) {
    return res.status(400).json({ message: 'O campo title não pode ser vazio.' });
  };

  next();
};

const validateFieldLink = (req, res, next) => {
  const { body } = req;

  if (body.link === undefined) {
    return res.status(400).json({ message: 'O campo link é requerido.' });
  };

  if (!body.link) {
    return res.status(400).json({ message: 'O campo link não pode ser vazio.' });
  };

  next();
};

const validateFieldDescription = (req, res, next) => {
  const { body } = req;

  if (body.description === undefined) {
    return res.status(400).json({ message: 'O campo description é requerido.' });
  };

  if (!body.description) {
    return res.status(400).json({ message: 'O campo description não pode ser vazio.' });
  };

  next();
};

const validateFieldTags = (req, res, next) => {
  const { body } = req;

  if (body.tags === undefined) {
    return res.status(400).json({ message: 'O campo tags é requerido.' });
  };

  if (!body.tags) {
    return res.status(400).json({ message: 'O campo tags não pode ser vazio.' });
  };

  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldLink,
  validateFieldDescription,
  validateFieldTags
};
