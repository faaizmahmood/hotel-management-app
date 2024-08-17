import React from 'react'
import useManageRooms from './useManageRooms'
import './ManageRooms.css'
import RoomCards from '../../Containers/RoomCards/RoomCards'
import { NavLink } from 'react-router-dom'


const ManageRooms = () => {

  const { roomsData } = useManageRooms()

  return (
    <>
      <section className='room-add-page'>
        <div className='main-content'>
          <h1>Rooms</h1>
          <p>Rooms are here</p>
        </div>

        <div className='text-end add-icon'>
          <NavLink to='/add-rooms'><i class="fa-regular fa-plus"></i></NavLink>
        </div>

        <div className='room-cards'>
          {
            roomsData?.length === 0 ? (
              <div>
                <h1>No Rooms Available</h1>
              </div>
            ) : (
              roomsData?.map((room, ind) => (
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

export default ManageRooms