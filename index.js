require('@babel/register');
const express = require('express');

const path = require('path');
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
// const Registration = require('./components/Registration');
// const Login = require('./components/Login');
const authRouter = require('./routes/views/auth.route');

// const sessionConfig = require('./config/session');

const app = express();

// app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', authRouter);

app.listen(3000, () => {
  console.log('working');
});
