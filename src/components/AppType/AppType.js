import React, { useState } from 'react'
import './AppType.css'

const AppType = () => {
  const [isQuiz, setIsQuiz] = useState(false)
  localStorage.setItem('isQuiz', isQuiz)

  const handleClick = e => {
    if(!e.currentTarget.classList.contains('on-click')){
      setIsQuiz(!isQuiz)
      localStorage.setItem('isQuiz', isQuiz)
    } 
    console.log(isQuiz)
  }

  return (
    <div className="app-type">
        <button className={!isQuiz ? 'btn-app-type-1 btn-app-type on-click' : 'btn-app-type-1 btn-app-type'} onClick={handleClick}>QPs</button>
        <button className={isQuiz ? 'btn-app-type-2 btn-app-type on-click' : 'btn-app-type-2 btn-app-type'} onClick={handleClick}>Quiz</button>
    </div>
  )
}

export default AppType