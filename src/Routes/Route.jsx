import './Router.css'
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
import { Route, Routes } from 'react-router';



const Router = () => {
    return (
        <>
            <main className='main-container d-flex'>
                <div className='sidebar-container'>
                    <SideBar />
                </div>
                <div className='main-container' style={{ width: "-webkit-fill-available", backgroundColor: '#f6f9fc' }}>
                    <div className='main-conatiner--section'>
                        <Header />
                        <Routes>
                            <Route path='/' element={<DashBoad />} />
                            <Route path='/manage-employe' element={<ManageEmploye />} />
                            <Route path='/manage-rooms' element={<ManageRooms />} />
                            <Route path='/manage-booking' element={<ManageBooking />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/room-detail-page' element={<RoomDetailPage />} />
                            <Route path='/room-listing-page' element={<RoomListingPage />} />
                            <Route path='/user-dashBoard' element={<UserDashBoard />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Router