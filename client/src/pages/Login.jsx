import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

const LoginPage = () => {
  return (
    <div className="login-page d-flex justify-content-center align-items-center min-vh-100 bg-dark">
      <div className="card p-4 rounded-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="login-title text-center fw-bold mb-2">Welcome Back</h2>
          <p className="login-subtitle text-center text-muted mb-4">Please sign in to your account</p>

          <form className="login-form mb-3">
            <input type="email" placeholder="Email" className="form-control mb-3 rounded-3" />
            <input type="password" placeholder="Password" className="form-control mb-3 rounded-3" />

            <button type="submit" className="btn btn-success btn-lg w-100 rounded-3 mb-2">
              Sign In
            </button>

            <button
              type="button"
              className="btn btn-light w-100 rounded-3 text-muted border mb-4"
              onClick={() => {
                // forgot password action
              }}
            >
              Forgot Password?
            </button>
          </form>

          <div className="text-center text-muted mb-3 fw-bold">or</div>

          <div className="login-footer text-center small text-muted">
            <p>
              Don’t have an account? <Link to="/register" className="fw-bold text-decoration-none">Create one</Link>
            </p>
            <Link to="/" className="fw-bold text-decoration-none">Return to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;