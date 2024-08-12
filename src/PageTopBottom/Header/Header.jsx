import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header id='header' className='py-3'>
        <div>
          <h2>Wellcome, Faaiz Mahmood</h2>
        </div>
        <div>
          <i class="fa-regular fa-bells"></i>
          <i className="fa-regular fa-user"></i>
        </div>

      </header>
    </>
  )
}

export default Header