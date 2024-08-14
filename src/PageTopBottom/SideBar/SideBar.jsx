import React, { useContext, useEffect, useState } from 'react'
import './SideBar.css'
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink, useLocation } from 'react-router-dom';
import {UserTypeContext} from '../../ReduxStore/store';
import { BeatLoader } from 'react-spinners';

const SideBar = () => {

  const { loggedInUserType } = useContext(UserTypeContext)
  // const location = useLocation();
  // const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  // }, [location]);

  const renderUserSidebar = () => {
    return (
      <aside className='d-flex flex-column justify-content-between px-4 py-4' id='aside-nav'>
        <i className="fa-sharp-duotone fa-regular fa-shield-quartered"></i>
        <Tooltip title="User Dashboard" placement="right">
          <NavLink to='/user-dashBoard'><i className="fa-regular fa-grid-horizontal"></i></NavLink>
        </Tooltip>
        <Tooltip title="Room Listing Page" placement="right">
          <NavLink to='/room-listing-page'><i class="fa-regular fa-bed-empty"></i></NavLink>
        </Tooltip>
        <Tooltip title="Room Detail Page" placement="right">
          <NavLink to='/room-detail-page'> <i class="fa-regular fa-circle-info"></i></NavLink>
        </Tooltip>
        <Tooltip title="Contact" placement="right">
          <NavLink to='/contact'><i class="fa-regular fa-envelope"></i></NavLink>
        </Tooltip>
        <Tooltip title="Profile" placement="right">
          <i class="fa-regular fa-user"></i>
        </Tooltip>
        <Tooltip title="Support" placement="right">
          <i className="fa-regular fa-user-headset"></i>
        </Tooltip>
        <Tooltip title="Affiliates" placement="right">
          <i className="fa-regular fa-regular fa-link-simple"></i>
        </Tooltip>
      </aside>
    )
  }

  const renderAdminSidebar = () => {
    return (
      <aside className='d-flex flex-column justify-content-between px-4 py-4' id='aside-nav'>
        <i className="fa-sharp-duotone fa-regular fa-shield-quartered"></i>
        <Tooltip title="Dashboard" placement="right">
          <NavLink to='/'><i className="fa-regular fa-grid-horizontal"></i></NavLink>
        </Tooltip>
        <Tooltip title="Manage Employee" placement="right">
          <NavLink to='/manage-employe'><i class="fa-regular fa-users"></i></NavLink>
        </Tooltip>
        <Tooltip title="Manage Rooms" placement="right">
          <NavLink to='/manage-rooms'> <i class="fa-regular fa-list-check"></i></NavLink>
        </Tooltip>
        <Tooltip title="Manage Bookings" placement="right">
          <NavLink to='/manage-booking'><i class="fa-regular fa-memo"></i></NavLink>
        </Tooltip>
        <Tooltip title="Profile" placement="right">
          <i class="fa-regular fa-user"></i>
        </Tooltip>
        <Tooltip title="Support" placement="right">
          <i className="fa-regular fa-user-headset"></i>
        </Tooltip>
        <Tooltip title="Affiliates" placement="right">
          <i className="fa-regular fa-regular fa-link-simple"></i>
        </Tooltip>
      </aside>
    )
  }


  return (
    <>
           { loggedInUserType === 'user' ? renderUserSidebar() : renderAdminSidebar()}
    </>

  );


}

export default SideBar