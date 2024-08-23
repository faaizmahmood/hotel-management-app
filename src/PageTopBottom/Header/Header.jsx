import React, { useContext } from 'react'
import './Header.css'
import { UserTypeContext } from '../../ReduxStore/store'
import { NavLink } from 'react-router-dom'


const Header = () => {

  const {loggedInUser} = useContext(UserTypeContext)

  return (
    <>
      <header id='header' className='py-3'>
        <div>
          <h1>Wellcome, {loggedInUser?.name}</h1>
        </div>
        <div>
         {loggedInUser.usertype === "admin" ? <NavLink to="/notification"><i class="fa-regular fa-bells"></i></NavLink> : "" }
          <i className="fa-regular fa-user"></i>
        </div>

      </header>
    </>
  )
}

export default Header