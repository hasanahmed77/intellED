import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Selection from '../../components/Selection/Selection'
import './Sessions.css'

const Sessions = () => {
    const title = localStorage.getItem('year')
    const sessions = ['January', 'May', 'October']

    return (
    <div className="sessions-page">
        <Navbar />

        <h1 className='location-title'>{title}</h1>

        <Selection levels={sessions} />
    </div>
    )
}

export default Sessions