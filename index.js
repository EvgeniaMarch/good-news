require('@babel/register');

const express = require('express');
const path = require('path');
// const sessionConfig = require('./config/session');

const renderComponent = require('./middlewares/renderComponent');

const authRouter = require('./routes/views/auth.routes');
const mainRouter = require('./routes/views/mainPage.routes');
const redirectRouter = require('./routes/redirect');
const newsElementRouter = require('./routes/api/newsElement.routes');

const app = express();

// app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(renderComponent);

app.use('/', redirectRouter);
app.use('/news/auth', authRouter);
app.use('/news', mainRouter);
app.use('/news', newsElementRouter);

app.listen(3000, () => {
  console.log('working');
});
