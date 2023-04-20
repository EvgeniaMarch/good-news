require('@babel/register');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const path = require('path');
// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
// const Registration = require('./components/Registration');
// const Login = require('./components/Login');
const authRouter = require('./routes/views/auth.route');
const Navbar = require('./components/Navbar');
const authApiRouter = require('./routes/api/authApiRoute');
const navRote = require('./routes/views/main.route');

const sessionConfig = require('./config/session');

const app = express();

app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/api', authApiRouter);
app.use('/', navRote);

// app.get('/', (req, res) => {
//   const navbar = React.createElement(Navbar);
//   const html = ReactDOMServer.renderToStaticMarkup(navbar);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });
app.listen(3000, () => {
  console.log('working');
});
