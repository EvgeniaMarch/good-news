const mainRouter = require('express').Router();

const mainPage = require('../../components/mainPage');

const { History, User } = require('../../db/models');

mainRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  if (userId) {
    const user = await User.findOne({ where: { id: userId } });
    const topics = await History.findAll({ where: { user_id: userId } });
    res.status(200).send(res.renderComponent(mainPage, { user, topics }));
  } else {
    res.redirect('/');
  }
});

module.exports = mainRouter;
