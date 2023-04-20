const React = require('react');
const ReactDOMServer = require('react-dom/server');
const navbarRoute = require('express').Router();

const Navbar = require('../../components/Navbar');

navbarRoute.get('/', (req, res) => {
  const navbar = React.createElement(Navbar);
  const html = ReactDOMServer.renderToStaticMarkup(navbar);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = navbarRoute;
