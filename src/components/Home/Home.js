import React from 'react'
import Navbar from '../Navbar/Navbar.js'
import AppType from '../AppType/AppType.js'
import Selection from '../Selection/Selection.js'

const Home = () => {
  const levels = ['IGCSE', 'AS', 'A2']

  return (
    <div className='home'>
        <Navbar />
        <AppType />
        <Selection levels={levels} />
    </div>
  )
}

export default Home