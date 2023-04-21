const React = require('react');

function notFoundPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style/notfound.css" />
        <title>Упс! Ничего не найдено!</title>
      </head>
      <body>
        <div id="notfound">
          <h1>Упс! Ничего не найдено!</h1>
          <img
            id="image"
            src="/images/404pageVanya.png"
            alt="not found"
            width={500}
            height={300}
            style={{ boxShadow: 'rgb(179, 179, 179) 0px 0px 10px;' }}
          />
          <h3>Ошибка 404!</h3>
        </div>
      </body>
    </html>
  );
}

module.exports = notFoundPage;
