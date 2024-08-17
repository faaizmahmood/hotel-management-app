import React from 'react'
import './UserDashBoard.css'
import Cards from '../../Containers/Cards/Cards'

const RoomItem = () => {
  return (
    <div className='room-item'>
      <h2>Room # 1</h2>
      <i class="fa-solid fa-circle-caret-right"></i>
    </div>
  )
}

const UserDashBoard = () => {



  return (
    <>
      <main className='' id='dashboard'>

        <div className='main-content'>
          <h1>user dashboard</h1>
          <p>Welcome Ekash Finance Management</p>
        </div>

        <div className='cards'>
          <Cards
            title="Current Reservation"
            value="01"
            description="You have one upcoming reservation."
            icon="fa-regular fa-lock"
          />
          <Cards
            title="Available Rooms"
            value="12"
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
              <RoomItem />
              <RoomItem />
              <RoomItem />
            </div>
            <button>See All <i class="fa-regular fa-eye"></i></button>
          </div>

          <div className='profile-section'>
            <img src='./images/FaaizMahmood.png' alt='profile-section-img' className='profile-section-img' />
            <h1 className='mt-4'>Faaiz Mahmood</h1>
            <p>Manage your personal details and preferences here for a tailored stay experience.</p>
            <button>See Full Profile</button>
          </div>
        </div>

        <div className='contact--and--offers mt-4'>
          <div className='contact'>
            <h1>Special Offers & Promotions</h1>
          </div>

          <div className='offers-section'>
            <h1>Special Offers & Promotions</h1>
            <div className='offer-item'>
              <div>
                <h2>Summer Escape Special <span>(Valid until September 30, 2024)</span></h2>
                <p>Enjoy a limited-time discount on your next stay. Book now and save 20% on all room types!</p>
              </div>
            </div>
            <div>
              <div>
                <h2>Summer Escape Special <span>(Valid until September 30, 2024)</span></h2>
                <p>Enjoy a limited-time discount on your next stay. Book now and save 20% on all room types!</p>
              </div>
            </div>
            <div>
              <div>
                <h2>Summer Escape Special <span>(Valid until September 30, 2024)</span></h2>
                <p>Enjoy a limited-time discount on your next stay. Book now and save 20% on all room types!</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default UserDashBoard