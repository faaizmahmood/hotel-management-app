import React from 'react';
import './RoomCards.css';
import { useNavigate } from 'react-router-dom';

const Cards = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='room-card-item'>
        <img src={props.img} alt='card-img' className='card-img' />
        <div className='mx-2'>
          <h2 className='mt-3'>Room No: {props.roomNo}</h2>
          <p>{props.RoomDescription.slice(0, 30)}..</p>
          <hr />
          <button onClick={() => {
            navigate('/room-detail-page', { state: props.room });
          }}>
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
