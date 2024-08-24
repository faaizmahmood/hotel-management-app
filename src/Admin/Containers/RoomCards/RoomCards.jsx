import React from 'react'
import './RoomCards.css'

const Cards = (props) => {
  return (
    <>
      <div className='room-card-item'>
        <img src={`https://solstice-interesting-burrito.glitch.me/images/${props.img}`} alt='card-img' className='card-img' />
        <div className='mx-2'>
          <h2 className='mt-3'>Room No: {props.roomNo}</h2>
          <p>{props.RoomDescription.slice(0, 30)}..</p>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Cards