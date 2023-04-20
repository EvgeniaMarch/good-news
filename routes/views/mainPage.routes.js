const mainRouter = require('express').Router();

const mainPage = require('../../components/mainPage');

const { User } = require('../../db/models');

mainRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = await User.findOne({ where: { id: userId } });
  res.status(200).send(res.renderComponent(mainPage, { user }));
});

module.exports = mainRouter;
