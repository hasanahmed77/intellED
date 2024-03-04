import React from 'react'
import './Years.css'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Years = () => {
    const location = useLocation().pathname.slice(1)
    const years = [2020, 2021, 2022, 2023, 2024]

  return (
    <div className='years'>
        <Navbar />

        <h1 className='location-title'>{location}</h1>

        <div className="years-section">
            <h1 className='year-title'>Years:</h1>
            <ul className='years-list'>
                {
                    years.map(year => (
                        <li>{year}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Years