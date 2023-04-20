const React = require('react');
const Layout = require('./Layout');

function Navbar() {
  return (
    <nav className="navbar" style={{ background: '#000264' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/news">
          Новости
        </a>
        <div className="nav-container">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul class="dropdown-menu">
              <form role="search">
                <li id="search-dropdown">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Найти совпадения по словам"
                    aria-label="Search"
                    name="search"
                    id="searchInput"
                  />
                </li>
                <li>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Найти совпадения по словам"
                    aria-label="Search"
                    name="search"
                    id="searchInput"
                  />
                </li>
                <li>
                  <button className="btn btn-light search-btn" type="submit">
                    Искать
                  </button>
                </li>
              </form>
            </ul>
          </div>

          <a className="icon-link nav" href="/auth/registration">
            Выйти
          </a>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
        integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
        crossorigin="anonymous"
      ></script>
    </nav>
  );
}

module.exports = Navbar;
