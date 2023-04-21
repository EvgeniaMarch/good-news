const mainRouter = require('express').Router();

const mainPage = require('../../components/mainPage');

const { User, History } = require('../../db/models');

mainRouter.get('/', async (req, res) => {
  const { userId } = req.session;

  if (userId) {
    const allSearches = await History.findAll();
    const words = allSearches.map((search) => search.mainWord);
    const mostPopular = words.reduce((acc, i) => {
      if (acc.hasOwnProperty(i)) {
        acc[i] += 1;
      } else {
        acc[i] = 1;
      }
      return acc;
    }, {});

    let mostPopularArray = [];

    for (const [key, value] of Object.entries(mostPopular)) {
      mostPopularArray.push({ word: key, count: value });
    }

    mostPopularArray.sort((prev, curr) => {
      return curr.count - prev.count;
    });

    mostPopularArray = {
      first: mostPopularArray[0],
      second: mostPopularArray[1],
      third: mostPopularArray[2],
    };

    const user = await User.findOne({ where: { id: userId } });
    const topics = await History.findAll({ where: { user_id: userId } });
    res
      .status(200)
      .send(res.renderComponent(mainPage, { user, topics, mostPopularArray }));
  } else {
    res.redirect('/');
  }
});

module.exports = mainRouter;
