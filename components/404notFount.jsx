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
        <div id='notfound'>
          <h1>Упс! Ничего не найдено!</h1>
          <img id='image'
            src="https://t3.ftcdn.net/jpg/01/01/89/46/360_F_101894688_RVSZUtDfPR6Cr5eBDQI7Qo5pZ01jmyK3.jpg"
            alt="not found"
          />
          <h3>Ошибка 404!</h3>
        </div>
      </body>
    </html>
  );
}

module.exports = notFoundPage;
