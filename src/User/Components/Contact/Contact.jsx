import React from 'react';
import './Contact.css';
import useContact from './useContact';
import { BeatLoader } from 'react-spinners';

const Contact = () => {

  const {formik, loading} = useContact()


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


  return (
    <>
      <section id='contact'>

      <div className='main-content'>
          <h1>Contact</h1>
          <p>Send You Message to Us!</p>
        </div>

        <div className="contact-form-container">
          <form onSubmit={formik.handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                id="name"
                name="name"
                type="text"
                placeholder='Enter Your Name'
                className={`form-input ${formik.touched.name && formik.errors.name ? 'input-error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-message">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter Your Email'
                className={`form-input ${formik.touched.email && formik.errors.email ? 'input-error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder='Enter Your Message'
                className={`form-input ${formik.touched.message && formik.errors.message ? 'input-error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows={"5"}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="error-message">{formik.errors.message}</div>
              ) : null}
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        </section>
      </>
      )
}

      export default Contact