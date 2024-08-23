import React from 'react';
import useManageRooms from './useManageRooms';
import './ManageRooms.css';
import RoomCards from '../../Containers/RoomCards/RoomCards';
import { NavLink } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const ManageRooms = () => {

  const { roomsData, loading } = useManageRooms();

  return (
    <>
      <section className='room-add-page'>
        <div className='main-content'>
          <h1>Rooms</h1>
          <p>Rooms are here</p>
        </div>

        {
          loading ? (
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
          ) : (
            <>
              <div className='text-start add-icon'>
                <NavLink to='/add-rooms' aria-label="Add Room"><i className="fa-regular fa-plus"></i> Add New Room</NavLink>
              </div>

              <div className='room-cards'>
                {roomsData?.length === 0 ? (
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
                )}
              </div>
            </>
          )
        }

      </section>
    </>
  );
};

export default ManageRooms;
