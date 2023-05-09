import React, {useState} from 'react'
import score  from './QuestionsAnswersTemplate'




 const GameEnd = ({score}) => {

    
  return (
    <div>
        <h1>Thank you for THE GAME!</h1>
        
        
        <p>Your score is {(score)}</p>
        {console.log(score)}
        { console.log("check")> 7 ? <p>You won!</p> : <p>You lost</p>}
        <button>
            GO BACK TO MAIN MENU
        </button>
    </div>
    
  )
}


export default GameEnd