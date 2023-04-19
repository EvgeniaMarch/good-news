const React = require('react');
const Layout = require('./Layout');

function Navbar() {
  return (
    <Layout>
      <nav className="navbar" style={{ background: '#009b95' }}>
        <div className="container-fluid">
          <a className="navbar-brand">Новости</a>
          <div className="nav-container">
            <select class="form-select" aria-label="Default select example">
              <option selected>Самые популярные</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Найти совпадения по словам"
                aria-label="Search"
              />
              <button className="btn btn-light search-btn" type="submit">
                Искать
              </button>
            </form>
            <a class="icon-link nav" href="/logot">
              Выйти
            </a>
          </div>
        </div>
      </nav>
    </Layout>
  );
}

module.exports = Navbar;
