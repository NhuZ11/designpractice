import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 px-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              UPEXMOVE
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    OUR SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TESTIMONIALS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>

              <button className="btn btn-success">GET A QUOTE</button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
