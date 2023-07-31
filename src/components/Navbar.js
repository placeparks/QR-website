import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <img src={logo} alt="logo" style={{ height: "50px" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-links">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

