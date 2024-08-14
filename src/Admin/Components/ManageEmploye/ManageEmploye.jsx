import React from 'react'
import { useNavigate } from 'react-router';
import useStore from '../../../ReduxStore/store';

const ManageEmploye = () => {

  const {loggedInUserType} = useStore()
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'user') {
          navigate('/user-dashBoard');
      }
  }, [loggedInUserType, navigate]);

  return (
   <>
    <h1>Manage Employe</h1>
   </>
  )
}

export default ManageEmploye