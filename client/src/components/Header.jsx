import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-6 p-0" style={{ backgroundColor: '#282c34', borderBottom: '4px solid #080f1e' }}>
      <div className="container">
        {/* Brand */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
           <div className="h4 mb-0 text-white">
             <span className="fw-bold">WORK</span><br />
             <span className="text-warning">SYNC</span>
          </div>

        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/clients" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Clients
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ContactUs" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Contact Us
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink to="/sync-repos" className={({ isActive }) => isActive ? 'nav-link active text-white' : 'nav-link text-white'}>
                Repo Sync
              </NavLink>
            </li>

            <div className="d-flex ms-lg-3 mt-3 mt-lg-0">
            <NavLink to="/login" className="btn btn-success text-dark fw-bold square-pill me-3 px-3">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-info text-dark fw-bold square-pill px-3 ">
              Register
            </NavLink>
          </div>

          </ul>
        </div>
      </div>
    </nav>
  );
}
