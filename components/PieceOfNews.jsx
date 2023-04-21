const React = require('react');

function pieceOfNewsGenerate({ pieceOfNews }) {
  return (
    <a
      className="container-of-piece"
      id="first-container"
      href={pieceOfNews.link}
      target="_blank"
    >
      <div className="content-of-piece">
        <div className="title-of-piece">
          <h5>{pieceOfNews.title}</h5>
        </div>
        {pieceOfNews.subtitle ? (
          <div className="subtitle-of-piece1">{pieceOfNews.subtitle}</div>
        ) : (
          <div className="subtitle-of-piece1">{pieceOfNews.subtitle1}</div>
        )}

        <div className="subtitle-of-piece2">{pieceOfNews.subtitle2}</div>
        <div className="subtitle-of-piece3" id="nasha-button">
          {pieceOfNews.subtitle3}
        </div>
      </div>
      {pieceOfNews.image && (
        <img className="image-of-piece" src={pieceOfNews.image} alt="img" />
      )}
    </a>
  );
}

module.exports = pieceOfNewsGenerate;
