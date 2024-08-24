import React from 'react'
import './Review.css'
import { BeatLoader } from 'react-spinners';
import useReview from './useReview';

const Review = () => {


    const { formik, loading } = useReview();


    if (loading) {
        return (
            <div className="loading-container"
                style={{
                    width: '100%',
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: "10px",
                    boxShadow: "0 0 2px 0 rgba(145, 158, 171, .3), 0 12px 24px -4px rgba(145, 158, 171, .12)",
                }}
            >
                <BeatLoader />
            </div>
        );
    }

    return (
        <section id="room-review">

            <div className='main-content'>
                <h1>Review Your Stay</h1>
                <p>Gave your Review to Improve our Service!</p>
            </div>

            <div className="review-form-container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            placeholder="Enter Your Name"
                            disabled
                        />
                        {formik.touched.userName && formik.errors.userName && (
                            <div className="error-text">{formik.errors.userName}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            value={formik.values.userEmail}
                            onChange={formik.handleChange}
                            placeholder="Enter Your Email"
                            disabled
                        />
                        {formik.touched.userEmail && formik.errors.userEmail && (
                            <div className="error-text">{formik.errors.userEmail}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating"></label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formik.values.rating}
                            onChange={formik.handleChange}
                            placeholder="Enter your rating - (1-5)"
                            min="1"
                            max="5"
                        />
                        {formik.touched.rating && formik.errors.rating && (
                            <div className="error-text">{formik.errors.rating}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <textarea
                            id="reviewText"
                            name="reviewText"
                            value={formik.values.reviewText}
                            onChange={formik.handleChange}
                            placeholder="Write your review here"
                            rows={5}
                        />
                        {formik.touched.reviewText && formik.errors.reviewText && (
                            <div className="error-text">{formik.errors.reviewText}</div>
                        )}
                    </div>

                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </section>
    );

}

export default Review