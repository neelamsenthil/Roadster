import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="nav-logo">
            ROADSTER
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
        </ul>
        < button className='nav-contact'>Contact</button>


    </div>
  )
}

export default Nav