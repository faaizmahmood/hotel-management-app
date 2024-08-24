import React from 'react'
import './BookRoom.css'
import useRoomBooking from './useBookRoom'
import { BeatLoader } from 'react-spinners'


const BookRoom = () => {

    const { formik, loading } = useRoomBooking()


    if(loading){
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
            <section id='book-room'>

                <div className='main-content'>
                    <h1>Add Rooms</h1>
                    <p>Rooms are here</p>
                </div>

                <div className='booking-form mt-5'>
                    <form onSubmit={formik.handleSubmit}>
                        {/* Room Details Section */}
                        <div className='section-header'>
                            <h2>Room Details</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>

                                    <input
                                        type='text'
                                        id='roomNo'
                                        name='roomNo'
                                        value={formik.values.roomNo}
                                        onChange={formik.handleChange}
                                        placeholder='Room No'
                                        disabled
                                    />
                                    {formik.touched.roomNo && formik.errors.roomNo ? (
                                        <div className="error-text">{formik.errors.roomNo}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id='roomType'
                                        name='roomType'
                                        value={formik.values.roomType}
                                        onChange={formik.handleChange}
                                        placeholder='Room Type'
                                        disabled
                                    />
                                    {formik.touched.roomType && formik.errors.roomType ? (
                                        <div className="error-text">{formik.errors.roomType}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* User Details Section */}
                        <div className='section-header'>
                            <h2>User Details</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='userName'
                                        id="userName"
                                        placeholder='Enter Your Name'
                                        value={formik.values.userName}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.userName && formik.errors.userName ? (
                                        <div className="error-text">{formik.errors.userName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        id="userEmail"
                                        name="userEmail"
                                        placeholder='Enter Your Email'
                                        value={formik.values.userEmail}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.userEmail && formik.errors.userEmail ? (
                                        <div className="error-text">{formik.errors.userEmail}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>



                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='tel'
                                        name='userContact'
                                        id="userContact"
                                        placeholder='Enter Your Contact Number'
                                        value={formik.values.userContact}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.userContact && formik.errors.userContact ? (
                                        <div className="error-text">{formik.errors.userContact}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id="userAddress"
                                        name="userAddress"
                                        placeholder='Enter Your Address'
                                        value={formik.values.userAddress}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.userAddress && formik.errors.userAddress ? (
                                        <div className="error-text">{formik.errors.userAddress}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>


                        {/* Family Details Section */}
                        <div className='section-header'>
                            <h2>Family Details</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='number'
                                        name='numberOfAdults'
                                        id="numberOfAdults"
                                        placeholder='Number of adults'
                                        value={formik.values.numberOfAdults}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.numberOfAdults && formik.errors.numberOfAdults ? (
                                        <div className="error-text">{formik.errors.numberOfAdults}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='number'
                                        id="numberOfChildren"
                                        name="numberOfChildren"
                                        placeholder='Number of Childrens'
                                        value={formik.values.numberOfChildren}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.numberOfChildren && formik.errors.numberOfChildren? (
                                        <div className="error-text">{formik.errors.numberOfChildren}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Booking Details Section */}
                        <div className='section-header'>
                            <h2>Booking Details</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='date'
                                        name='checkInDate'
                                        id="checkInDate"
                                        placeholder='Check-in Date'
                                        value={formik.values.checkInDate}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.checkInDate && formik.errors.checkInDate ? (
                                        <div className="error-text">{formik.errors.checkInDate}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='date'
                                        id="checkOutDate"
                                        name="checkOutDate"
                                        placeholder='Check-out Date'
                                        value={formik.values.checkOutDate}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.checkOutDate && formik.errors.checkOutDate ? (
                                        <div className="error-text">{formik.errors.checkOutDate}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className='section-header'>
                            <h2>Payment Details</h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='pricePerDay'
                                        id="pricePerDay"
                                        placeholder='Price Per Day'
                                        value={formik.values.pricePerDay}
                                        onChange={formik.handleChange}
                                        disabled
                                    />
                                    {formik.touched.pricePerDay && formik.errors.pricePerDay ? (
                                        <div className="error-text">{formik.errors.pricePerDay}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id="totalPrice"
                                        name="totalPrice"
                                        placeholder='Total Price'
                                        value={formik.values.totalPrice}
                                        onChange={formik.handleChange}
                                        disabled
                                    />
                                    {formik.touched.totalPrice && formik.errors.totalPrice ? (
                                        <div className="error-text">{formik.errors.totalPrice}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <button type="submit">Book Room</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </section>
        </>
    )
}

export default BookRoom