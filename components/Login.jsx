const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <main className="container">
        <h1 className="header">Авторизация</h1>
        <div className="form-container">
          <div className="error" id="errorDiv"></div>
          <form className="login-form" id="login-form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Введите ваше имя
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Введите пароль
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-light">
              Вход
            </button>
          </form>
        </div>
      </main>
      <script src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
