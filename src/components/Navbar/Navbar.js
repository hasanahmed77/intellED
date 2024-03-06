import React from 'react'
import logo from '../../images/logo.svg'
import line from '../../images/line.svg'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  const location = useLocation().pathname.slice(1)

  const levels = ['IGCSE', 'AS', 'AS']
  const subjects = ['Chemistry', 'Physics', 'Maths']
  const months = ['January', 'May', 'October']  

  if(location === '') localStorage.setItem('selection', '')
  if(levels.includes(location)) localStorage.setItem('selection', location)
  if(subjects.includes(location)) localStorage.setItem('selection', localStorage.getItem('selection'))
  if(months.includes(location)) localStorage.setItem('selection', localStorage.getItem('selection')) 

  console.log('where', localStorage.getItem('selection'))

  console.log('LOCATION', location)
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