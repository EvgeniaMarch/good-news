const React = require('react');
const ReactDOMServer = require('react-dom/server');
const mainRouter = require('express').Router();

const Navbar = require('../../components/Navbar');

mainRouter.get('/', (req, res) => {
  const navbar = React.createElement(Navbar);
  const html = ReactDOMServer.renderToStaticMarkup(navbar);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = mainRouter;
