const React = require('react');
const ReactDOMServer = require('react-dom/server');
const authRouter = require('express').Router();

const Registration = require('../../components/Registration');
const Login = require('../../components/Login');

authRouter.get('/registration', (req, res) => {
  const registration = React.createElement(Registration);
  const html = ReactDOMServer.renderToStaticMarkup(registration);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

authRouter.get('/login', (req, res) => {
  const login = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = authRouter;
