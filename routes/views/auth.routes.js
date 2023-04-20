const authRouter = require('express').Router();

const Registration = require('../../components/Registration');
const Login = require('../../components/Login');

authRouter.get('/registration', (req, res) => {
  res.send(res.renderComponent(Registration));
});

authRouter.get('/login', (req, res) => {
  res.send(res.renderComponent(Login));
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.redirect('/auth/registration');
  });
});

module.exports = authRouter;
