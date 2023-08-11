import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg ">
          <div className="container-fluid">
            <Link  to="/" className="navbar-brand"> VU </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Main">Home</Link>
                </li>
                <li className="nav-item">
                
                  <a className="nav-link" href="#about ">About</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Form">Sign Up<i class="fa-solid fa-right-to-bracket"></i></Link>
                </li>

                <li className="nav-item justify-content-end">
                  <Link className="nav-link" to="/Login">Log In <i class="fa-solid fa-user"></i></Link>
                </li>
              </ul>
             


            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
