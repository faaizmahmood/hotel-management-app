import React from 'react'
import { useNavigate } from 'react-router';
import useStore from '../../../ReduxStore/store';

const ManageRooms = () => {

  const {loggedInUserType} = useStore()
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'user') {
          navigate('/user-dashBoard');
      }
  }, [loggedInUserType, navigate]);

  return (
   <>
    <h1>Manage Rooms</h1>
   </>
  )
}

export default ManageRooms