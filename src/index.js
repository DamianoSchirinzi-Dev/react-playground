function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <div className="content">
      <h1 className="header-title">My blog!</h1>
      <div className="blog-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin faucibus nulla at maximus. Curabitur tincidunt nisl elit, in consectetur lorem hendrerit vitae. Cras sit amet nisi ex. Aenean fermentum lorem sit amet turpis posuere egestas. Nam vestibulum lectus vitae sem volutpat ultrices. Curabitur non ornare arcu, sit amet molestie libero. Proin semper facilisis eros.</p>

        <p>Phasellus eleifend at sem nec malesuada. Phasellus maximus, nunc sed tincidunt semper, ligula ex maximus dui, quis efficitur ligula sem a est. Nullam ullamcorper viverra orci, at accumsan risus fringilla molestie.</p>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);
