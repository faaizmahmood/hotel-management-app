import React, { useContext, useEffect } from 'react';
import './SideBar.css';
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from 'react-router-dom';
import { UserTypeContext } from '../../ReduxStore/store';
import useSideBar from './useSideBar';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const { loggedInUser } = useContext(UserTypeContext);
  const navigate = useNavigate();
  const { logout } = useSideBar();

  // Redirect to sign-in page if loggedInUser is null
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/auth-sign-in");
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null; // Render nothing if loggedInUser is null
  }

  const renderUserSidebar = () => {
    return (
      <aside className='d-flex flex-column justify-content-between px-4 py-4' id='aside-nav'>
        <i className="fa-sharp-duotone fa-regular fa-shield-quartered"></i>
        <Tooltip title="User Dashboard" placement="right">
          <NavLink to='/user-dashBoard'><i className="fa-regular fa-grid-horizontal"></i></NavLink>
        </Tooltip>
        <Tooltip title="Room Listing Page" placement="right">
          <NavLink to='/room-listing-page'><i className="fa-regular fa-bed-empty"></i></NavLink>
        </Tooltip>
        <Tooltip title="Your Reservations" placement="right">
          <NavLink to='/reservations'><i className="fa-regular fa-landmark-magnifying-glass"></i></NavLink>
        </Tooltip>
        <Tooltip title="Contact" placement="right">
          <NavLink to='/contact'><i className="fa-regular fa-envelope"></i></NavLink>
        </Tooltip>
        <Tooltip title="Profile" placement="right">
          <NavLink to='/profile'><i className="fa-regular fa-user"></i></NavLink>
        </Tooltip>
        <Tooltip title="Logout" placement="right">
          <i className="fa-solid fa-arrow-right-from-bracket" onClick={logout}></i>
        </Tooltip>
      </aside>
    );
  };

  const renderAdminSidebar = () => {
    return (
      <aside className='d-flex flex-column justify-content-between px-4 py-4' id='aside-nav'>
        <i className="fa-sharp-duotone fa-regular fa-shield-quartered"></i>
        <Tooltip title="Dashboard" placement="right">
          <NavLink to='/'><i className="fa-regular fa-grid-horizontal"></i></NavLink>
        </Tooltip>
        <Tooltip title="Manage Employee" placement="right">
          <NavLink to='/manage-employe'><i className="fa-regular fa-users"></i></NavLink>
        </Tooltip>
        <Tooltip title="Manage Rooms" placement="right">
          <NavLink to='/manage-rooms'><i className="fa-regular fa-list-check"></i></NavLink>
        </Tooltip>
        <Tooltip title="Current Bookings" placement="right">
          <NavLink to='/manage-booking'><i className="fa-regular fa-paperclip-vertical"></i></NavLink>
        </Tooltip>
        <Tooltip title="Bookings History" placement="right">
          <NavLink to='/history'><i class="fa-regular fa-rectangle-history"></i></NavLink>
        </Tooltip>
        <Tooltip title="Reviews" placement="right">
          <NavLink to='/admin-reviews'><i class="fa-regular fa-star-sharp-half-stroke"></i></NavLink>
        </Tooltip>
        <Tooltip title="Logout" placement="right">
          <i className="fa-solid fa-arrow-right-from-bracket" onClick={logout}></i>
        </Tooltip>
      </aside>
    );
  };

  return (
    <>
      {loggedInUser?.usertype === 'user' ? renderUserSidebar() : renderAdminSidebar()}
    </>
  );
};

export default SideBar;
