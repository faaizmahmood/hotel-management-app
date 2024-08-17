import React from 'react'
import './RoomListingPage.css'
import useRoomListingPage from './useRoomListingPage';
import RoomCards from '../../Containers/RoomCards/RoomCards'

export const RoomListingPage = () => {

  const { roomsData } = useRoomListingPage()
console.log("hi:", roomsData)

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
                  img={room.CoverImageURL}

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