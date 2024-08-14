import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { UserTypeContext } from '../../../ReduxStore/store';

export const RoomListingPage = () => {

  const { loggedInUserType } = useContext(UserTypeContext)
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