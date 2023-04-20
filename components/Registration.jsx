const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <main className="container">
        <h1 className="header">Регистрация</h1>
        <div className="form-container">
          <form className="registr-form" id="registr-form">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Логин
              </label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Пароль
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="repeatInputPassword1" className="form-label">
                Повторите пароль
              </label>
              <input
                name="repeat"
                type="password"
                className="form-control"
                id="repeatInputPassword1"
                required
              />
            </div>

            <button type="submit" className="btn">
              Регистрация
            </button>
          </form>
        </div>
        <div className="link-to-login">
          Уже зарегистрированы?&nbsp;
          <a
            className="icon-link icon-link-hover"
            style={{ '--bs-link-hover-color-rgb': '25, 135, 84' }}
            href="/login"
          >
            Войти
            <svg className="bi" aria-hidden="true">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
        </div>
      </main>
      <script src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Registration;
