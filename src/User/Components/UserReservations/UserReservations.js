import React from 'react'
import './UserReservations.css'
import useUserReservations from './useUserReservations'
import { BeatLoader } from 'react-spinners'
import { useContext } from 'react'
import { UserTypeContext } from '../../../ReduxStore/store'
import { NavLink } from 'react-router-dom'

const UserReservations = () => {

    const { loading, bookingsData } = useUserReservations()

    const { loggedInUser, setUserReservations } = useContext(UserTypeContext)

    const filteredBookings = bookingsData.filter((ele) => loggedInUser.userId === ele.userId);

    setUserReservations(filteredBookings.length)

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
            <section id='user-reservations'>

                <div className='main-content'>
                    <h1>Your Reservations</h1>
                    <p>See you Reservations Here</p>
                </div>


                <div className='ManageBookingCards'>
                    {
                        filteredBookings.length === 0 ? (
                            <>
                                <h1 className='mt-4'>You Have Not current Reservations</h1>
                                <NavLink tp='/room-listing-page'><button className='book-now'>Book Room Now</button></NavLink>
                            </>
                        ) : (
                            filteredBookings.map((ele, ind) => {
                                return (
                                    <div className='ManageBookingCards-Item'>
                                        <div className="booked-room-card">
                                            <div className="card-header">
                                                <h2>Room {ele.roomNo}</h2>
                                                <p>{ele.roomType}</p>
                                            </div>
                                            <div className="card-body">
                                                <div className="user-details">
                                                    <p><strong>Booked By:</strong> {ele.userName}</p>
                                                    <p><strong>Contact:</strong> {ele.userContact}</p>
                                                    <p><strong>Email:</strong> {ele.userEmail}</p>
                                                </div>
                                                <div className="booking-details">
                                                    <p><strong>Check-In:</strong> {ele.checkInDate}</p>
                                                    <p><strong>Check-Out:</strong> {ele.checkOutDate}</p>
                                                    <p><strong>Duration:</strong> {ele.duration} night(s)</p>
                                                    <p><strong>Price per Day:</strong> {ele.pricePerDay} PKR</p>
                                                    <p><strong>Total Price:</strong> {ele.totalPrice} PKR</p>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="cancel-booking-btn">Cancel Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }


                </div>

            </section>
        </>
    )
}

export default UserReservations