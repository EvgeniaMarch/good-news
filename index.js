require('@babel/register');

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const sessionConfig = require('./config/session');

const renderComponent = require('./middlewares/renderComponent');
const getUser = require('./middlewares/getUser');

const authRouter = require('./routes/views/auth.routes');
const mainRouter = require('./routes/views/mainPage.routes');
const redirectRouter = require('./routes/redirect');
const newsElementRouter = require('./routes/api/newsElement.routes');
const authApiRouter = require('./routes/api/authApi.routes');
const loaderRouter = require('./routes/api/loader.routes');
const notFoundRouter = require('./routes/views/404notFound.routes');

const app = express();

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(getUser);
app.use(renderComponent);

app.use('/', redirectRouter);
app.use('/auth', authRouter);
app.use('/news', mainRouter);
app.use('/news', newsElementRouter);
app.use('/news', loaderRouter);
app.use('/api', authApiRouter);
app.use('/*', notFoundRouter);

app.listen(3000, () => {
  console.log('working');
});
