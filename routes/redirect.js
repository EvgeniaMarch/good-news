const redirectRouter = require('express').Router();

redirectRouter.get('/', (req, res) => {
  res.redirect('/auth/registration');
});

module.exports = redirectRouter;
