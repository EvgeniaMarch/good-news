const getMostPopular = require('express').Router();

const { History } = require('../../db/models');

getMostPopular.post('/getPopular', async (req, res) => {
  try {
    const mostPopular = await History.findAll();
    console.log(mostPopular);
  } catch (error) {
    console.error(error);
  }
});

module.exports = getMostPopular;
