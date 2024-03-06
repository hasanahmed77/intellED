import React, { useEffect, useState } from 'react'
import './Years.css'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom'

const Years = () => {
    const location = useLocation().pathname.slice(1)
    const years = [2020, 2021, 2022, 2023, 2024]
    const [isQuiz, setIsQuiz] = useState(localStorage.getItem('isQuiz'))

    const handleClick = (e) => {
        if(localStorage.getItem('isQuiz') == 'true') {
            console.log('QUIZ')
        } else {
            console.log('QPs')
        }

        localStorage.setItem('year', e.target.innerText)
    }

    useEffect(() => {
        console.log('useEffect RAN')
        const handleStorageChange = () => {
          setIsQuiz(localStorage.getItem('isQuiz'));
        };
    
        // Listen for storage changes
        window.addEventListener('storage', handleStorageChange);

        console.log(isQuiz)
    
        return () => {
          // Clean up the event listener when component unmounts
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []); 

  return (
    <div className='years'>
        <Navbar />

        <h1 className='location-title'>{location}</h1>

        <div className="years-section">
            <h1 className='year-title'>Years:</h1>
            <ul className='years-list'>
                { years.map((year, index) => (
                        <li className='single-year' key={index} onClick={handleClick}><Link to='/sessions'>{year}</Link></li>
                    )) }
            </ul>
        </div>
    </div>
  )
}

export default Years