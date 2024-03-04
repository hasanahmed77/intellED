import React from 'react'
import './Selection.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Selection = ({ levels }) => {
  return (
    <div className="subjects">
      {
        levels.map((level, index) => (
          <Link to={`/${level}`}><button className={`btn-subjects btn-subjects-${index+1}`}><span className='btn-content'>{level}</span></button></Link>
        ))
      }
    </div>
  )
}

export default Selection