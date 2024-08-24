import React, { useContext } from 'react';
import useDashBoard from './useDashBoard';
import './DashBoard.css';
import { BeatLoader } from 'react-spinners';
import Cards from '../../Containers/Cards/Cards';
import { NavLink } from 'react-router-dom';
import { UserTypeContext } from '../../../ReduxStore/store';

const Dashboard = () => {

    const { loading, data } = useDashBoard();

    const { loggedInUser } = useContext(UserTypeContext)

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
        );
    }

    return (
        <section id='admin-dashboard'>

            <div className='main-content'>
                <h1>Dashboard</h1>
                <p>Welcome to the Ekash Booking Management App</p>
            </div>

            <div className='cards'>
                <Cards
                    title="Current Bookings"
                    value={data.currentBookings.length}
                    description="You have active reservations for today."
                    icon="fa-regular fa-calendar-check"
                />
                <Cards
                    title="Total Rooms"
                    value={data.totalRooms}
                    description="Explore the total number of rooms available in the system."
                    icon="fa-regular fa-bed"
                />
                <Cards
                    title="App Users"
                    value={'--'}
                    description="View the total number of users registered in the app."
                    icon="fa-regular fa-users"
                />
                <Cards
                    title="Total Reviews"
                    value={data.totalReviews}
                    description="Check the total number of reviews left by users."
                    icon="fa-regular fa-star-sharp-half-stroke"
                />
            </div>



            <div className='room-list--and--profile-section'>

                <div className='room-list'>

                    <div>
                        {
                            data.currentBookings.length === 0 ? (
                                <h1>No Notification Available</h1>
                            ) : (
                                data.currentBookings.map((ele, ind) => {
                                    return (
                                        <div className='room-item' key={ind}>
                                            <h2>Faaiz Booked Room # {ele.roomNo}</h2>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                    <NavLink to='/notification'><button>See All Notifications <i class="fa-regular fa-eye"></i></button></NavLink>
                </div>

                <div className='profile-section'>
                    <img src='./images/profile-img.png' alt='profile-section-img' className='profile-section-img' />
                    <h1 className='mt-4'>{loggedInUser.name}</h1>
                    <p>Manage your personal details and preferences here for a tailored stay experience.</p>
                   <NavLink to='/profile'><button>See Full Profile</button></NavLink> 
                </div>
            </div>

        </section>
    );
};

export default Dashboard;
