const newsElementRouter = require('express').Router();
// const pieceOfNewsGenerate = require('../../components/PieceOfNews');
// const mainPage = require('../../components/mainPage');
const NewsContainer = require('../../components/NewsContainer');
const News = require('../../public/class');

newsElementRouter.post('/getNews', (req, res) => {
  try {
    const arrayOfNews = req.body.news.results.map(
      (el) => new News(el.title, el.description, el.image_url, el.link)
    );
    res.json({
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
