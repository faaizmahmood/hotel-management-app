import React from 'react'
import './RoomListingPage.css'
import useRoomListingPage from './useRoomListingPage';
import RoomCards from '../../Containers/RoomCards/RoomCards'
import { BeatLoader } from 'react-spinners';

export const RoomListingPage = () => {

  const { roomsData, loading } = useRoomListingPage()

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
            borderRadius:"10px"
          }}>
          <BeatLoader />
        </div>
      </>
    )
  }

  return (
    <>
      <section className='room-listing-page'>
        <div className='main-content'>
          <h1>Rooms</h1>
          <p>Rooms are here</p>
        </div>

        <div className='room-cards'>
          {
            roomsData.length === 0 ? (
              <div>
                <h1>No Rooms Available</h1>
              </div>
            ) : (
              roomsData.map((room, ind) => (
                <RoomCards
                  key={ind}
                  roomNo={room.roomNo}
                  RoomDescription={room.RoomDescription}
                  img={`http://localhost:4000/images/${room.CoverImageURL}`}
                  room={room}
                />
              ))
            )
          }
        </div>
      </section>
    </>
  )
}


export default RoomListingPage