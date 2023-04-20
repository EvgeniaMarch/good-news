const React = require('react');
const PieceOfNews = require('./PieceOfNews');

function pieceOfNewsContainer({ news }) {
  return (
    <div className="container-of-news">
      {news.map((elem, index) => (
        <PieceOfNews key={index} pieceOfNews={elem} />
      ))}
    </div>
  );
}

module.exports = pieceOfNewsContainer;
