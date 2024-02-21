import React from 'react'
import logo from '../../images/logo.svg'
import line from '../../images/line.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <a href="#"><img src={logo} alt="intellED" /></a>
        </div>

        <img src={line} alt="-" className='line' />
        
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
  )
}

export default Navbar