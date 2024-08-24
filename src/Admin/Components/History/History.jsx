import React from 'react'
import './History.css'
import useHistory from './useHistory'
import { BeatLoader } from 'react-spinners'

const History = () => {

    const { loading, history } = useHistory()



    if (loading) {
        return (
            <div className="loading-container"
                style={{
                    width: '100%',
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: "10px",
                    boxShadow: "0 0 2px 0 rgba(145, 158, 171, .3), 0 12px 24px -4px rgba(145, 158, 171, .12)",
                }}
            >
                <BeatLoader />
            </div>
        );
    }


    return (
        <section id='history'>

            <div className='main-content'>
                <h1>History</h1>
                <p>See the History of Booked Rooms.</p>
            </div>

            <div className='history-section'>

                {
                    history.map((ele, ind) => {
                        return (
                            <div className='history-item' key={ind}>
                                <h1>Booking History</h1>
                                <p><strong>{ele.userName}</strong> was booked Room <strong>#{ele.roomNo}</strong> for <strong>{ele.duration} days</strong> from <strong>{ele.checkInDate}</strong> to <strong>{ele.checkOutDate}</strong>.</p>
                                <p>Total Payment: <strong>{ele.totalPrice} PKR</strong></p>
                                <p>Price Per Day: <strong>{ele.pricePerDay} PKR</strong></p>
                            </div>
                        )
                    })
                }
                


            </div>


        </section>

    )
}

export default History