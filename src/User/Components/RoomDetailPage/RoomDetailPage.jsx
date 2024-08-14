import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import {UserTypeContext} from '../../../ReduxStore/store';

const RoomDetailPage = () => {

  const { loggedInUserType } = useContext(UserTypeContext)
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'admin') {
          navigate('/');
      }
  }, [loggedInUserType, navigate]);

  return (
    <>
        <h1>Room Detail Page</h1>
    </>
  )
}

export default RoomDetailPage