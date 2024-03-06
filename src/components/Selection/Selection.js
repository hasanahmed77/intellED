import React from 'react'
import './Selection.css'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Selection = ({ levels }) => {
  const handleClick = (e) => {
    console.log('selection', e.target.innerText)
    
    let existingLocalStorageValue = localStorage.getItem('selection')
    let data = existingLocalStorageValue ? `${existingLocalStorageValue} ${e.target.innerText}` : e.target.innerText
    localStorage.setItem('selection', data)

  }

  return (
    <div className="subjects">
      {
        levels.map((level, index) => (
          <Link 
            key={index} 
            to={`/${level}`}
            onClick={handleClick}
          >
            <button className={`btn-subjects btn-subjects-${index+1}`}>
              <span  className='btn-content'>{level}</span>
            </button>
          </Link>
        ))
      }
    </div>
  )
}

export default Selection