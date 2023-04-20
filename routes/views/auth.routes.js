const authRouter = require('express').Router();

const Registration = require('../../components/Registration');
const Login = require('../../components/Login');

authRouter.get('/registration', (req, res) => {
  res.send(res.renderComponent(Registration));
});

authRouter.get('/login', (req, res) => {
  res.send(res.renderComponent(Login));
});

module.exports = authRouter;
