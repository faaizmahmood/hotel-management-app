import React from 'react'
import { useNavigate } from 'react-router';
import useStore from '../../../ReduxStore/store';

const UserDashBoard = () => {

  const {loggedInUserType} = useStore()
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'admin') {
          navigate('/');
      }
  }, [loggedInUserType, navigate]);

  return (
    <>
        <h1>User DashBoard</h1>
    </>
  )
}

export default UserDashBoard