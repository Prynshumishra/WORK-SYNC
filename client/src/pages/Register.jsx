import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

const RegisterPage = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="card p-4 rounded-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="login-title text-center fw-bold mb-2">Create Account</h2>
          <p className="login-subtitle text-center text-muted mb-4">Sign up to get started</p>

          <form className="login-form mb-3">
            <input type="text" placeholder="Full Name" className="form-control mb-3 rounded-3" />
            <input type="email" placeholder="Email" className="form-control mb-3 rounded-3" />
            <input type="password" placeholder="Password" className="form-control mb-3 rounded-3" />
            <input type="password" placeholder="Confirm Password" className="form-control mb-4 rounded-3" />

            <button type="submit" className="btn btn-success btn-lg w-100 rounded-3 mb-3">
              Register
            </button>
          </form>

          <div className="login-footer text-center small text-muted">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="fw-bold text-decoration-none">Sign In</Link>
            </p>
            <Link to="/" className="fw-bold text-decoration-none">Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;