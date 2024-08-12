import React from 'react'
import './SideBar.css'
import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
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

    </>
  )
}

export default SideBar