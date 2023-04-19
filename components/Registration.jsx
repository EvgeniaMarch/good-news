const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <h1 className="header">Регистрация</h1>
      <div className="form-container">
        <form className="registr-form" id="registr-form">
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
              Придумайте пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
            />
          </div>

          <button type="submit" className="btn btn-light">
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
      <script src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Registration;
