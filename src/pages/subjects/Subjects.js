import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import Selection from '../../components/Selection/Selection'
import './Subjects.css'

const Subjects = () => {
  const location = useLocation().pathname.slice(1)
  const subjects = ['Chemistry', 'Physics', 'Maths']

  return (
    <div className="subjects-page">
        <Navbar />

        <h1 className='location-title'>{location}</h1>

        <Selection levels={subjects} />
    </div>
  )
}

export default Subjects