import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Login</h1>
            <form className="mt-5">
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                {/* Checkbox and Forgot Password */}
                <div className="row mb-4">
                    <div className="col d-flex justify-content-start align-items-center">
                        {/* Checkbox */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-end">
                        {/* Forgot password */}
                        <Link to="#!" className="text-decoration-none">Forgot password?</Link>
                    </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4" ><Link to="http://localhost:3000/categoryDashboard" style={{ color: 'white', textDecoration: 'none' }}>Sign in</Link></button>

                {/* Register buttons */}
                <div className="text-center mb-4">
                    <p>Not a member? <Link to="#!" className="text-decoration-none">Register</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
