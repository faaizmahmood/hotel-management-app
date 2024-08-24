import React from 'react'
import './AdminReviews.css'
import useAdminReviews from './useAdminReviews'
import { BeatLoader } from 'react-spinners'


const AdminReviews = () => {

    const { reviews, loading } = useAdminReviews()


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
        <section id='admin-reviews'>

            <div className='main-content'>
                <h1>Review of Clients</h1>
                <p>See the Review of you clients here.</p>
            </div>


            <div className='admin-reviews-container'>

                {
                    reviews.map((ele, ind) => {
                        return (
                            <div className='admin-reviews-item'>
                                <h2>{ele.userName} left {ele.rating} star Review for Room No {ele.roomNo}</h2>
                                <p>{ele.reviewText}</p>
                            </div>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default AdminReviews