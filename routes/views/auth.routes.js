const authRouter = require('express').Router();

const Registration = require('../../components/Registration');
const Login = require('../../components/Login');

authRouter.get('/registration', (req, res) => {
  const { userId } = req.session;
  if (userId) {
    res.redirect('/news');
  } else {
    res.status(200).send(res.renderComponent(Registration));
  }
});

authRouter.get('/login', (req, res) => {
  const { userId } = req.session;
  if (userId) {
    res.redirect('/news');
  } else {
    res.status(200).send(res.renderComponent(Login));
  }
});

authRouter.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = authRouter;
