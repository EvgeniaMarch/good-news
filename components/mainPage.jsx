const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const PieceOfNews = require('./PieceOfNews');

function mainPage({ user }) {
  const firstTry = {
    title: `Привет, ${user.login}!`,
    subtitle: 'Начни искать и что-нибудь обязательно найдется',
    image:
      'https://i.pinimg.com/474x/2d/39/e8/2d39e8bfe8fe9f1eae1f1d2b7baff9e5.jpg',
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
