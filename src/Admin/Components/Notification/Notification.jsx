import React from 'react'
import './Notification.css'
import useNotification from './useNotification'
import { BeatLoader } from 'react-spinners'



const NotificationItem = (props) => {
    return (
        <div className='notification-item'>
            <button disabled>New Room Booked</button>
            <h2 className='mt-2'>New Room Booked : Room No : {props.roomNo}</h2>
            <p>{props.userName} Booked this room for {props.duration} {props.duration >= 1 ? "day" : "days"}</p>
        </div>
    )
}

const Notification = () => {

    const { loading, bookingsData } = useNotification()



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
            <section id='notification'>

                <div className='main-content'>
                    <h1>Notification</h1>
                    <p>See you Notification here!</p>
                </div>

                <div className='notification-items'>
                    {
                        bookingsData.length === 0 ? (
                            <>
                                <h1>No Notification Available</h1>
                            </>
                        ) : (
                            <>
                                {
                                    bookingsData.map((ele, ind) => (
                                        <NotificationItem
                                            key={ind}
                                            roomNo={ele?.roomNo}
                                            userName={ele?.userName}
                                            duration={ele?.duration}
                                        />
                                    ))
                                }
                            </>
                        )
                    }
                </div>

            </section>
        </>
    )
}

export default Notification