import './App.css';
import Router from '../Routes/Route';
import { Route, Routes, useNavigate } from 'react-router';
import Login from '../auth/Login/Login';
import SignUp from '../auth/SignUp/SignUp';
import { UserTypeContext } from '../ReduxStore/store';
import { useContext, useEffect } from 'react';


function App() {
  const { loggedInUserType } = useContext(UserTypeContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUserType === "admin") {
      navigate("/");
    }
    else if (loggedInUserType === "user") {
      navigate("/user-dashBoard");
    }
  }, [loggedInUserType, navigate]);

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