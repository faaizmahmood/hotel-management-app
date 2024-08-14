import React from 'react'
import { useNavigate } from 'react-router';
import useStore from '../../../ReduxStore/store';

const Contact = () => {

  const {loggedInUserType} = useStore()
  const navigate = useNavigate();

  React.useEffect(() => {
      if (loggedInUserType === 'admin') {
          navigate('/');
      }
  }, [loggedInUserType, navigate]);

  return (
    <>
        <h1>Contact</h1>
    </>
  )
}

export default Contact