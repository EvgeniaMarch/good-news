const React = require('react');
const Layout = require('./Layout');
const Navbar = require('./Navbar');
const PieceOfNews = require('./PieceOfNews');

function mainPage({ user }) {
  const firstTry = {
    title: `Привет, ${user.login}!`,
    subtitle: 'Начни искать и что-нибудь обязательно найдется',
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
