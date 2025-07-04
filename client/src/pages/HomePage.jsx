import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container py-5">
      {/* Hero section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Welcome to Work Sync</h1>
        <p className="lead mb-4">
            Simplify your workflow with powerful tools for easy project and client management.
        </p>
        <Link to="/dashboard" className="btn btn-success btn-lg">
            Launch Dashboard
          </Link>
          <Link to="/projects" className="btn btn-outline-primary btn-lg mx-2">
            View Projects
          </Link>
      </div>

      {/* Features section with your card styling */}
      <section className="container py-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow">
              <h3 className="mb-3">Easy Management</h3>
              <p>Organize your projects and clients efficiently with a simple interface.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow">
              <h3 className="mb-3">Real-Time Updates</h3>
              <p>Stay up to date with live changes and ensure your team is always in sync.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow">
              <h3 className="mb-3">Detailed Insights</h3>
              <p>Gain actionable insights from analytics to make informed decisions and drive success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-4">What Our Users Say</h2>
        <div className="row gy-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow">
              <p className="fst-italic">"This platform transformed how we manage our work. Everything is organized and efficient!"</p>
              <p className="fw-bold mb-0">- Priya S., Team Lead</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow">
              <p className="fst-italic">"Easy to use and incredibly powerful. Our productivity has never been better."</p>
              <p className="fw-bold mb-0">- Amit V., Project Manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <h3 className="fw-bold mb-3">Ready to get started?</h3>
        <p className="mb-4">Start managing your projects and clients today with our all-in-one solution.</p>
        <Link to="/dashboard" className="btn btn-success btn-lg">
          Launch Dashboard
        </Link>
      </div>
    </div>
  );
}
