const notFoundRouter = require('express').Router();
const notFoundPage = require('../../components/404notFount');

notFoundRouter.get('/', (req, res) => {
  try {
    res.status(200).send(res.renderComponent(notFoundPage));
  } catch (error) {
    console.error(error);
  }
});

module.exports = notFoundRouter;
