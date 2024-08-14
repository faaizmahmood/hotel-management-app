import './App.css';
import Router from '../Routes/Route';
import { Route, Routes, useNavigate } from 'react-router';
import Login from '../auth/Login/Login';
import SignUp from '../auth/SignUp/SignUp';
import useStore from '../ReduxStore/store';
import { useEffect } from 'react';

function App() {

  const {loggedInUserType} = useStore()
  const navigate = useNavigate()

  useEffect(()=>{
    loggedInUserType=== ""? navigate('/auth-sign-in') : navigate("/")
  },[])


  return (
    <>


      {
        loggedInUserType === "" ? (
          <Routes>
            <Route path='/auth-sign-in' element={<Login />} />
            <Route path='/auth-sign-up' element={<SignUp />} />
          </Routes>
        ) : (
          <Router />
        )
      }
    </>
  );
}

export default App;
