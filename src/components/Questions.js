import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';

const TriviaRequestHistory = () => {
    const [question, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showScore, setShowScore] = useState(false)

    const [score, setScore] = useState(0);



    const url = "https://opentdb.com/api.php?amount=10&category=23&type=multiple";

    useEffect(() =>{
        Axios.get(url)
          .then(res => res.data)
          .then(data => {
            console.log(data.results)
            {/*we need to modify object from db to be able to manipulate its constituents*/}
            const question = data.results.map((q) => ({
                ...q,
                answers:[q.correct_answer, ...q.incorrect_answers].sort(() =>  0.5 - Math.random())
            }))

            setQuestion(question)

            })
      },[]);

      const handleAnswerOptionClick = (correct_answer, answers, answer) => {
        question.map((q) => {
          answers.map((answer => {
            console.log(answer)
          console.log(q.correct_answer)
          if (answer === q.correct_answer) {
            setScore(score + 1);
          }
        }))
        })
          
      
          const nextQuestion = question + 1;
          if (nextQuestion < question.length) {
            setQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
        };
        


{/*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/}
  return(
    question.length > 0 ?

    <div className='container' >
        <QuestionsAnswersTemplate data={question[currentIndex]} handleAnswerOptionClick={handleAnswerOptionClick} score={score}/>
     </div> : "Just a little bit of patience, please"

  )

}

export default TriviaRequestHistory;