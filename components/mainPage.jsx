const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const NewsTopics = require('./newsTopics');
const PieceOfNews = require('./PieceOfNews');

function mainPage({ user, topics }) {
  const firstTry = {
    title: `Привет, ${user.login}!`,
    subtitle1: 'Читай самые актуальные новости на нашем портале.',
    subtitle2: 'Вот темы, которые интересовали тебя в прошлый раз:',
    subtitle3: <NewsTopics topics={topics} />,
    image:
      '/images/picNotFoundVanya.png',
  };
  return (
    <Layout>
      <Navbar />
      <div className="container-of-news">
        <PieceOfNews pieceOfNews={firstTry} />
      </div>
      <script src="/js/mainPage.js" defer />
    </Layout>
  );
}

module.exports = mainPage;
