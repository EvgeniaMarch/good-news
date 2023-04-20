const redirectRouter = require('express').Router();

redirectRouter.get('/', (req, res) => {
  res.redirect('/news/auth/registration');
});

module.exports = redirectRouter;
