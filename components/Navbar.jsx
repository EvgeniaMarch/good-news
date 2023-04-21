const React = require('react');

function Navbar({ mostPopularArray }) {
  return (
    <nav className="navbar" style={{ background: '#000264' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/news">
          Новости
        </a>
        <div className="nav-container">
          <div className="dropdown most-popular">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Самые популярные
            </button>
            <ul className="dropdown-menu most-popular-show">
              <li>
                <a className="dropdown-item" href="#">
                  {mostPopularArray.first.word}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {mostPopularArray.second.word}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  {mostPopularArray.third.word}
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle filter"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              Поиск новостей
            </button>
            <ul className="dropdown-menu">
              <form role="search" className="search-form">
                <li id="search-dropdown">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Найти новости по слову"
                    aria-label="Search"
                    name="search"
                    id="searchInput"
                  />
                </li>
                <li>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Исключить новости со словом"
                    aria-label="Search"
                    name="exeptionWord"
                    id="exeptionWord"
                  />
                </li>
                <li>
                  <button
                    className="btn btn-light search-btn button"
                    type="submit"
                  >
                    Искать
                  </button>
                </li>
              </form>
            </ul>
          </div>

          <a className="icon-link nav" href="/auth/logout">
            Выйти
          </a>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
        integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
        crossOrigin="anonymous"
      />
    </nav>
  );
}

module.exports = Navbar;
