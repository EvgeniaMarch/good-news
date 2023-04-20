const React = require('react');

function pieceOfNewsGenerate({ pieceOfNews }) {
  // console.log('vivodim eto', pieceOfNews);
  return (
    <a className="container-of-piece" href={pieceOfNews.link} target="_blank">
      <div className="content-of-piece">
        <div className="title-of-piece">
          <h5>{pieceOfNews.title}</h5>
        </div>
        <div className="subtitle-of-piece">{pieceOfNews.subtitle}</div>
      </div>
      {pieceOfNews.image && (
        <img className="image-of-piece" src={pieceOfNews.image} alt="img" />
      )}
    </a>
  );
}

module.exports = pieceOfNewsGenerate;
