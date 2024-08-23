import React from 'react'
import './AddRooms.css'
import useAddRooms from './useAddRooms'

const AddRooms = () => {

    const { formik} = useAddRooms()


    return (
        <>
            <section className='add-page'>
                <div className='main-content'>
                    <h1>Add Rooms</h1>
                    <p>Rooms are here</p>
                </div>

                <div className='add-rooms-form'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        id="roomNo"
                                        name='roomNo'
                                        placeholder='Enter Room No'
                                        value={formik.values.roomNo}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.roomNo && formik.errors.roomNo ? (
                                        <div className="error-text">{formik.errors.roomNo}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group' style={{ marginTop: '10px' }}>
                                    <select
                                        id='roomType'
                                        name='roomType'
                                        value={formik.values.roomType}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="" disabled>Select Room Type</option>
                                        <option value="Standard Room">Standard Room</option>
                                        <option value="Deluxe Room">Deluxe Room</option>
                                        <option value="Suite">Suite</option>
                                        <option value="Family Room">Family Room</option>
                                        <option value="Executive Room">Executive Room</option>
                                    </select>
                                    {formik.touched.roomType && formik.errors.roomType ? (
                                        <div className="error-text">{formik.errors.roomType}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='roomServentName'
                                        id="roomServentName"
                                        placeholder='Room Servant Name'
                                        value={formik.values.roomServentName}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.roomServentName && formik.errors.roomServentName ? (
                                        <div className="error-text">{formik.errors.roomServentName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group'>
                                    <input
                                        type='tel'
                                        id="roomServentContact"
                                        name="roomServentContact"
                                        placeholder='Room Servant Contact'
                                        value={formik.values.roomServentContact}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.roomServentContact && formik.errors.roomServentContact ? (
                                        <div className="error-text">{formik.errors.roomServentContact}</div>
                                    ) : null}
                                </div>
                            </div>
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
                                    />
                                    {formik.touched.pricePerDay && formik.errors.pricePerDay ? (
                                        <div className="error-text">{formik.errors.pricePerDay}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='form-group' style={{ marginTop: '10px' }}>
                                    <select
                                        id='status'
                                        name='status'
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="" disabled>Select Availability Status</option>
                                        <option value="Available">Available</option>
                                        <option value="Not Available">Not Available</option>
                                    </select>
                                    {formik.touched.status && formik.errors.status ? (
                                        <div className="error-text">{formik.errors.status}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <textarea
                                        name='description'
                                        id="description"
                                        placeholder='Add Room Description'
                                        rows="5"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.description && formik.errors.description ? (
                                        <div className="error-text">{formik.errors.description}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group images'>
                                    <input
                                        type='file'
                                        name='coverImg'
                                        onChange={(event) => formik.setFieldValue("coverImg", event.currentTarget.files[0])}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group images'>
                                    <input
                                        type='file'
                                        name='image1'
                                        onChange={(event) => formik.setFieldValue("image1", event.currentTarget.files[0])}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group images'>
                                    <input
                                        type='file'
                                        name='image2'
                                        onChange={(event) => formik.setFieldValue("image2", event.currentTarget.files[0])} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form-group'>
                                    <button type="submit">Add Room</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddRooms
