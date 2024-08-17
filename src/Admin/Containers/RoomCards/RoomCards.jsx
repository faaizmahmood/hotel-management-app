import React from 'react'
import './RoomCards.css'

const Cards = (props) => {
  return (
    <>
      <div className='room-card-item'>
        <img src={props.img} alt='card-img' className='card-img' />
        <div className='mx-2'>
          <h2 className='mt-3'>Room No: {props.roomNo}</h2>
          <h1>{props.RoomDescription.slice(0, 30)}..</h1>
          <hr />
          <button>Book Now</button>
        </div>
      </div>
    </>
  )
}

export default Cards