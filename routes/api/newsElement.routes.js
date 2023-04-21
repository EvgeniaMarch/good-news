const newsElementRouter = require('express').Router();
const NewsContainer = require('../../components/NewsContainer');
const News = require('../../public/class');

const { History } = require('../../db/models');

newsElementRouter.post('/getNews', async (req, res) => {
  try {
    const { search, exeptionWord } = req.body;

    const { userId } = req.session;

    await History.create({
      user_id: userId,
      mainWord: search,
      exception: exeptionWord,
    });

    let arrayOfNews = req.body.news.results.map((el) => {
      const content = el.title + el.description;
      if (el.link.includes('.ru') || el.link.includes('.com')) {
        if (exeptionWord) {
          if (
            !content
              .toLowerCase()
              .trim()
              .includes(exeptionWord.toLowerCase().trim())
          ) {
            return new News(el.title, el.description, el.image_url, el.link);
          }
        } else {
          return new News(el.title, el.description, el.image_url, el.link);
        }
      }
    });
    arrayOfNews = arrayOfNews.filter((el) => el !== undefined);

    res.status(200).json({
      html: res.renderComponent(
        NewsContainer,
        { news: arrayOfNews },
        { doctype: false }
      ),
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = newsElementRouter;
