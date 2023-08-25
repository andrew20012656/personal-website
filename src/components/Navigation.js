import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import favicon from "../images/favicon.ico"

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-body-tertiary">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
              style={{ zIndex: 1000 }}
            >
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/project">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link" to="/resume">
                    Experience
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <NavLink
            className="navbar-brand position-absolute top-50 start-50 translate-middle"
            to="/home"
          >
            <img src={favicon} alt="AL" />
          </NavLink>

          <div>
            <a
              href="https://github.com/andrew20012656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark mx-3"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yiyi-andrew-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
