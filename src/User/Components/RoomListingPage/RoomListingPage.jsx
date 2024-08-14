import React from 'react'
import { useNavigate } from 'react-router';

export const RoomListingPage = () => {

  const loggedInUserType = 'admin';
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'admin') {
          navigate('/');
      }
  }, [loggedInUserType, navigate]);

  return (
    <>
        <h1>Room Listing Page</h1>
    </>
  )
}


export default RoomListingPage