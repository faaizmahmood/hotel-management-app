import React from 'react';
import useDashBoard from './useDashBoard';
import { BeatLoader } from 'react-spinners';

const Dashboard = () => {

    const {loading} = useDashBoard()


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
        <h1>Dash Board</h1>
    );
};

export default Dashboard;
