import React, {useEffect, useState} from 'react'
import Axios from 'axios';

import Example from './Example';

const QA = () => {
    const [questions, setQuestions] = useState(); //all questions
    const [answer, setAnswer] = useState();
    const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);

    const url = "https://opentdb.com/api.php?amount=10&category=23&type=multiple";

    

    useEffect(() =>{
        
        Axios.get(url)
          .then(res => res.data)
          .then(data => {
            console.log(data.results)
            
            {/*we need to modify object from db to be able to manipulate its constituents*/}
            const questions = data.results.map((question) => ({
                ...question,
                answers:[question.correct_answer, ...question.incorrect_answers].sort(() =>  0.5 - Math.random())
               
            }))
           
            setQuestions(questions) 
            console.log(questions)
            console.log(questions[index]) // one question
            console.log(questions[index]["question"]) // question of one question
            console.log(questions[index]["answers"])
            console.log(questions[index]["correct_answer"])
            questions[index]["answers"].map((answer) => {
                console.log(answer)
                
            }
            )

            })
      },[]);

      

        

        const handleAnswerOptionClick = (correct_answer, answer) => {
          if (answer === correct_answer) {
              setScore(score + 1);
               setIndex(index + 1)
          }

           const nextQ = questions[index];
          if (nextQ < questions.length) {
               setQuestions(nextQ);
          } else {
               setShowScore(true)
          }
    
       }

       return(
        [questions].length > 0 ?
    
        <div className='container' >
            <Example/>
         </div> : "Just a little bit of patience, please"
    
      )

 }

export default QA