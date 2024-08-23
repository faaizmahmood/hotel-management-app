import React, { useContext } from 'react'
import './UserDashBoard.css'
import Cards from '../../Containers/Cards/Cards'
import { NavLink } from 'react-router-dom'
import { UserTypeContext } from '../../../ReduxStore/store'
import useUserDashBoard from './useUserDashBoard'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'




const UserDashBoard = () => {

  const { loggedInUser } = useContext(UserTypeContext)

  const { roomsData, loading, startLoading, userReservationsCount } = useUserDashBoard()

  const navigate = useNavigate()



  if (startLoading) {
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
      <main className='' id='dashboard'>

        <div className='main-content'>
          <h1>User dashboard</h1>
          <p>Welcome Ekash Finance Management</p>
        </div>

        <div className='cards'>
          <Cards
            title="Current Reservation"
            value={userReservationsCount}
            description="You have one upcoming reservation."
            icon="fa-regular fa-lock"
          />
          <Cards
            title="Available Rooms"
            value={roomsData.length}
            description="Explore available rooms and rates for your next stay."
            icon="fa-regular fa-bed"
          />
          <Cards
            title="Specal Offer"
            value="00"
            description="Check out our exclusive deals and promotions for a better experience."
            icon="fa-regular fa-party-horn"
          />
          <Cards
            title="Loyality Points"
            value="56"
            description="Check your loyalty points balance and redeem them for rewards."
            icon="fa-regular fa-gift"
          />
        </div>


        <div className='room-list--and--profile-section'>

          <div className='room-list'>

            <div>
              {
                roomsData.length === 0 ? (
                  <h1>No Room Available</h1>
                ) : (
                  roomsData.map((ele, ind) => {
                    return (
                      <div className='room-item' key={ind} onClick={() => {
                        navigate('/room-detail-page', { state: ele });
                      }}>
                        <h2>Room # {ele.roomNo}</h2>
                        <i class="fa-solid fa-circle-caret-right"></i>
                      </div>
                    )
                  })
                )
              }
            </div>
            <NavLink to='/room-listing-page'><button>See All <i class="fa-regular fa-eye"></i></button></NavLink>
          </div>

          <div className='profile-section'>
            <img src='./images/profile-img.png' alt='profile-section-img' className='profile-section-img' />
            <h1 className='mt-4'>{loggedInUser.name}</h1>
            <p>Manage your personal details and preferences here for a tailored stay experience.</p>
            <button>See Full Profile</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default UserDashBoard