import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
      <section id='login' className='login'>
        <div className='row'>
          <div className='col-6'>
            <div className='content'>
            <img src="./images/logo.png" alt='logo' className='logo' />
              <h1>Login to LuxeSuite</h1>
              <p>Wellcome Back to Your Account</p>
            </div>
          </div>
          <div className='col-6'>
            <img src="./images/login-signup-img.jpg" alt='login-signup-img' className='login-signup-img' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Login