import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav ">
        <img src="/Nike.png" alt=""  />
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button className='login'>Login</button>
    </div>
  )
}

export default Nav
