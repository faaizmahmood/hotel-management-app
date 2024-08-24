import React from 'react'
import './ManageBooking.css'
import useManageBookings from './useManageBooking';
import { BeatLoader } from 'react-spinners';

const ManageBooking = () => {


  const { loading, bookingsData } = useManageBookings()


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
      <>
        <section id='ManageBooking'>

          <div className='main-content'>
            <h1>Current Bookings</h1>
            <p>Manage your Booking from here! You can see Complete Booking History Here.</p>
          </div>

          <div className='ManageBookingCards'>
            {
              bookingsData.length === 0 ? (
                <h1>No Bookings Available</h1>
              ) : (
                bookingsData.map((ele, ind) => {
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
    </>
  )
}

export default ManageBooking