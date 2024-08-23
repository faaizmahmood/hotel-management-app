import './Router.css';
import DashBoad from '../Admin/Components/DashBoard/DashBoad';
import SideBar from '../PageTopBottom/SideBar/SideBar';
import Header from '../PageTopBottom/Header/Header';
import Footer from '../PageTopBottom/Footer/Footer';
import ManageBooking from '../Admin/Components/ManageBooking/ManageBooking';
import ManageEmploye from '../Admin/Components/ManageEmploye/ManageEmploye';
import ManageRooms from '../Admin/Components/ManageRooms/ManageRooms';
import Contact from '../User/Components/Contact/Contact';
import RoomDetailPage from '../User/Components/RoomDetailPage/RoomDetailPage';
import RoomListingPage from '../User/Components/RoomListingPage/RoomListingPage';
import UserDashBoard from '../User/Components/UserDashBoard/UserDashBoard';
import AddRooms from '../Admin/Components/AddRooms/AddRooms';
import BookRoom from '../User/Containers/BookRoom/BookRoom';
import Notification from '../Admin/Components/Notification/Notification';
import UserReservations from '../User/Components/UserReservations/UserReservations';
import { Route, Routes, useLocation } from 'react-router';
import Errors from '../Errors/Errors';
import Login from '../auth/Login/Login';
import SignUp from '../auth/SignUp/SignUp';
import { useContext, useEffect, useState } from 'react';
import { UserTypeContext } from '../ReduxStore/store';
import { Navigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const ProtectedRoute = ({ userType, allowedTypes, element }) => {
    if (!userType) {
        return <Navigate to="/auth-sign-in" />;
    }

    if (!allowedTypes.includes(userType)) {
        return <Navigate to="/error" />;
    }

    return element;
};

const Router = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserTypeContext);
    const [loading, setLoading] = useState(true); // Loading state
    const location = useLocation();

    const hideElementsRoutes = ['/auth-sign-in', '/auth-sign-up'];
    const hideElements = hideElementsRoutes.includes(location.pathname);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        setLoggedInUser(currentUser);

        setTimeout(() => {
            setLoading(false);
        }, 1000)

    }, [setLoggedInUser]);

    if (loading) {
        return (
            <>
                <div className='loading'
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                    <BeatLoader />
                </div>;
            </>
        )
    }

    return (
        <>
            <main className='main-container d-flex'>
                {!hideElements && (
                    <div className='sidebar-container'>
                        <SideBar />
                    </div>
                )}
                <div className='main-container' style={{ width: "-webkit-fill-available", backgroundColor: '#f6f9fc' }}>
                    <div className='main-conatiner--section'>
                        {!hideElements && <Header />}
                        <Routes>
                            {/* Admin Routes */}
                            <Route path='/' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<DashBoad />} />} />
                            <Route path='/manage-employe' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<ManageEmploye />} />} />
                            <Route path='/manage-rooms' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<ManageRooms />} />} />
                            <Route path='/manage-booking' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<ManageBooking />} />} />
                            <Route path='/add-rooms' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<AddRooms />} />} />
                            <Route path='/notification' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['admin']} element={<Notification />} />} />

                            {/* Simple User Routes */}
                            <Route path='/contact' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<Contact />} />} />
                            <Route path='/room-detail-page' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<RoomDetailPage />} />} />
                            <Route path='/room-listing-page' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<RoomListingPage />} />} />
                            <Route path='/user-dashBoard' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<UserDashBoard />} />} />
                            <Route path='/book-room' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<BookRoom />} />} />
                            <Route path='/reservations' element={<ProtectedRoute userType={loggedInUser?.usertype} allowedTypes={['user']} element={<UserReservations />} />} />

                            {/* Routes for Both */}
                            <Route path='/auth-sign-in' element={<Login />} />
                            <Route path='/auth-sign-up' element={<SignUp />} />
                            <Route path='*' element={<Errors />} />
                        </Routes>
                        {!hideElements && <Footer />}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Router;
