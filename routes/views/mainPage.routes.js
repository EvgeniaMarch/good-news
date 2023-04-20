const React = require('react');
const ReactDOMServer = require('react-dom/server');
const mainRouter = require('express').Router();

const mainPage = require('../../components/mainPage');

mainRouter.get('/', (req, res) => {
  res.send(res.renderComponent(mainPage));
});

module.exports = mainRouter;
