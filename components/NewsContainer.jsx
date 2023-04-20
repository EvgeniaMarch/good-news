const React = require('react');
const PieceOfNews = require('./PieceOfNews');

function pieceOfNewsContainer({ news }) {
  // console.log(news);
  return (
    <div className="">
      {news.map((elem, index) => (
        <PieceOfNews key={index} pieceOfNews={elem} />
      ))}
    </div>
  );
}

module.exports = pieceOfNewsContainer;
