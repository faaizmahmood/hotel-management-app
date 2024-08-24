import React, { useState } from 'react';
import './Login.css';
import useLogin from './useLogin';
import { NavLink } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formik, loading, startLoading } = useLogin();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  if (startLoading) {
    if (loading) {
      return (
        <>
          <div className='loading'
            style={{
              width: '100%',
              height: '60vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: "10px",
              boxShadow: "0 0 2px 0 rgba(145, 158, 171, .3), 0 12px 24px -4px rgba(145, 158, 171, .12)",
            }}>
            <BeatLoader />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <section id="login" className="login">
        <div className="row p-0">
          <div className="col-6">
            <div className="content">
              <div className="inner-container">
                <img src="./images/logo.png" alt="logo" className="logo" />
                <h1>Login to LuxeSuite</h1>
                <p>Welcome Back to Your Account</p>
                {/* form */}
                <form onSubmit={formik.handleSubmit} className="sign-in-form">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="email-input"
                      placeholder="Enter Your Email"
                      value={formik.values.email}
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}

                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error-text">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <div className="password-field">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="Enter Your Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <i
                        className="fa-regular fa-eye"
                        style={{ cursor: 'pointer' }}
                        onClick={handlePasswordVisibility}
                      ></i>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="error-text">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  {/* <div className="form-group">
                    <div className="select-field">
                      <select
                        id="userType"
                        value={formik.values.userType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="userType"
                      >
                        <option value="" disabled>Select User Type</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    {formik.touched.userType && formik.errors.userType ? (
                      <div className="error-text">{formik.errors.userType}</div>
                    ) : null}
                  </div> */}
                  <button type="submit"> {loading ? <BeatLoader /> : "Sign In"}</button>
                </form>
                {/* form */}
                <p className='mt-4'>
                  Don't have an account?{' '}
                  <NavLink
                    to='/auth-sign-up'
                    style={{ color: 'black', fontWeight: '700', textDecoration: 'none' }}
                  >
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              src="./images/login-signup-img.jpg"
              alt="login-signup-img"
              className="login-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
