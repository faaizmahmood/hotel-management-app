import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router';
import {UserTypeContext} from '../../../ReduxStore/store';

const UserDashBoard = () => {

  const { loggedInUserType } = useContext(UserTypeContext)
  const navigate = useNavigate();

  useEffect(() => {
      if (loggedInUserType === 'admin') {
          navigate('/');
      }
  }, [loggedInUserType, navigate]);

  console.log(loggedInUserType)
  return (
    <>
        <h1>User DashBoard</h1>
    </>
  )
}

export default UserDashBoard