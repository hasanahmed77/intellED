import React from 'react'
import logo from '../../images/logo.svg'
import line from '../../images/line.svg'
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <Link to="/"><img src={logo} alt="intellED" /></Link>
        </div>

        <img src={line} alt="-" className='line' />
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar