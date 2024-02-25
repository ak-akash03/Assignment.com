import React from "react";
import logo from "../../IMAGE/assignmentcom.png";

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container container-fluid">
          <a className="navbar-brand" href="">
            <img src={logo} height={"50px"} alt="png"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                >
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} href="">
                  LOGOUT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ALL PROJECT
                </a>
                <ul
                  className="dropdown-menu disabled"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="">
                      ASSIGNMENT WRITTEN WORK
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      SOFTWARE PROJECTS & REPORTS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
                      HARDWARE PROJECTS & REPORTS
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item disabled" href="">
                      OTHER
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href=""
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  DISABLED
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
