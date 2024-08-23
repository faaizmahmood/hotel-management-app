import React from 'react'
import './RoomDetailPage.css'
import useRoomDetailPage from './useRoomDetailPage'
import { BeatLoader } from 'react-spinners'
import { useNavigate } from 'react-router'

const RoomDetailPage = () => {

  const { changeImage, room, activeImg, loading } = useRoomDetailPage()

  const navigate = useNavigate()

  console.log("rooms from here", room)


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
      <section id='room-detail-page'>

        <div className='main-content'>
          <h1>Room No : {room?.roomNo}</h1>
          <p>{room?.RoomDescription}</p>
          <button
            onClick={(e) => {
              room?.AvailabilityStatus === "Available" ? navigate('/book-room', { state: room }) : alert("Room is Booked")
            }}
          >Book Now</button>
        </div>

        <div className='room-detail-page-header mt-5'>
          <div className='room-detail-page-header-img-list'>
            <img src={`http://localhost:4000/images/${room.CoverImageURL}`} alt='...' className='room-detail-page-img' data-imgID='1' onClick={(e) => changeImage(e)} />

            <img src={`http://localhost:4000/images/${room.image1URL}`} data-imgID='2' alt='...' className='room-detail-page-img' onClick={(e) => changeImage(e)} />

            <img src={`http://localhost:4000/images/${room.image2URL}`} data-imgID='3' alt='...' className='room-detail-page-img' onClick={(e) => changeImage(e)} />
          </div>

          <div className='room-detail-page-header-active-img'>
            <img src={activeImg} alt='' className='room-detail-page-img' />
          </div>

        </div>

        <div className='room-detail-page-body'>
          <button disabled>{room.pricePerDay}/- per day</button>

          <div className='row'>
            <div className='col-6'>
              <div className='serventDetails mt-5'>
                <h1>Servent Details</h1>
                <p className='mt-4 ms-3'><b>Servent Name:</b> {room?.roomServantName}</p>
                <p className='ms-3'><b>Servent Contact:</b> {room?.servantContact}</p>
              </div>
            </div>
            <div className='col-6'>
              <div className='serventDetails mt-5'>
                <h1>Room Details</h1>
                <p className='mt-4 ms-3'><b>Availability Status:</b> {room?.AvailabilityStatus}</p>
                <p className='ms-3'><b>Room Type:</b> {room?.roomType
                }</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default RoomDetailPage