import React, { useContext } from 'react'
import './Profile.css'
import useProfile from './useProfile'
import { BeatLoader } from 'react-spinners'
import { UserTypeContext } from '../ReduxStore/store'

const Profile = () => {

    const { loading } = useProfile()

    const { loggedInUser } = useContext(UserTypeContext);


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
        <section id='profile'>

            <div className='main-content'>
                <h1>Your Profile</h1>
                <p>See your Profile here!</p>
            </div>
            
            <div className='profile-card'>
                <div className='profile-card-header'>
                     <img src='./images/bg-profile.png' alt='bg-profile' className='profile-bg'/>
                </div>
                <div className='profile-card-image'>
                     <img src='./images/profile-img.png' alt='profile-pic' className='profile-img'/>
                </div>
                <div className='profile-card-body text-center mt-3'>
                     <h1>{loggedInUser?.name}</h1>
                     <p>Manage your personal details and preferences here for a tailored stay experience.</p>
                </div>
            </div>

        </section>
    )
}

export default Profile