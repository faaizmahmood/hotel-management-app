import React, {useState} from 'react'
import './SignUp.css';
import useSignUp from './useSignUp';
import { NavLink } from 'react-router-dom';


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { formik } = useSignUp();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section id="signUp" className="signUp">
        <div className="row">
          <div className="col-6">
            <div className="content">
              <div className="inner-container">
                <img src="./images/logo.png" alt="logo" className="logo" />
                <h1>Sign Up to LuxeSuite</h1>
                <p>Create your account to manage bookings, track guest preferences, and access exclusive features.</p>
                {/* form */}
                <form onSubmit={formik.handleSubmit} className="sign-up-form">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="name-input"
                      placeholder="Enter Your Name"
                      value={formik.values.name}
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}

                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="error-text">{formik.errors.name}</div>
                    ) : null}
                  </div>
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
                    <input
                      type="tel"
                      id="phone"
                      className="phone-input"
                      placeholder="Enter Your Phone"
                      value={formik.values.phone}
                      name="phone"
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
                  <button type="submit">Sign Up</button>
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
              className="login-signup-img"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp