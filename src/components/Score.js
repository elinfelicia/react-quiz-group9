import React, {useState} from 'react'
import QuestionsAnswersTemplate from './QuestionsAnswersTemplate'

const Score = (currentIndex, question, answer, correct_answer) => {

    const[score, setScore] = useState(0)

  return (
    question[currentIndex] === 10 ? (<h1>Final</h1>) : (
    <>
    <div className="d-flex flex-column align-items-center container mt-5">
        <h1>SCORE</h1>
        <div className=" btn btn-info">{setScore(score+1) ? (answer === correct_answer) : (setScore(score))}</div>  
      </div>
      </> )
  )
}

export default Score