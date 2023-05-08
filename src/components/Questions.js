import React, {useEffect, useState } from 'react'

import Axios from 'axios';
import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';

const TriviaRequestHistory = () => {
    const [question, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    

  
    useEffect(() => { 
      const newIndex = currentIndex + 1;
      console.log(newIndex)
      setCurrentIndex(newIndex)
    }, [])


    const url = "https://opentdb.com/api.php?amount=10&category=23&type=multiple";

    useEffect(() =>{
        Axios.get(url)
          .then(res => res.data)
          .then(data => {
            // console.log(data.results)
            // settAllQ(data.results)
            
            {/*we need to modify object from db to be able to manipulate its constituents*/}
            const question = data.results.map((q) => ({
                ...q,
                answers:[q.correct_answer, ...q.incorrect_answers].sort(() =>  0.5 - Math.random())
            }))

            setQuestion(question)
            // settAllQ(data.results)
          
            })
            
      },[]);


    const allQuestions = () => {
      // for (let i=0; i < question.length; i++) {
      //   console.log(question[i])
      // }

      const nextQuestion = question[currentIndex + 1];
      
      
      if (currentIndex < question.length) {
        setCurrentIndex(currentIndex)
        console.log(currentIndex)
        console.log(nextQuestion)
        
        
        
        setQuestion(nextQuestion)
    
        
        // console.log(question)
        // setCurrentIndex(currentIndex + 1);
        // console.log(question[currentIndex])
        
      }
      
      else {
        console.log("meow")
      }
      // setCurrentIndex(currentIndex + 1);
      
    }
      

      // const handleAnswerOptionClick = (correct_answer, answers, answer) => {
      //   question.map((q) => {
      //     answers.map((answer => {
      //       console.log(answer)
      //     console.log(q.correct_answer)
      //     if (answer === q.correct_answer) {
      //       setScore(score + 1);
      //     }
      //   }))
      //   })
          
      
      //     const nextQuestion = question + 1;
      //     if (nextQuestion < question.length) {
      //       setQuestion(nextQuestion);
      //     } else {
      //       setShowScore(true);
      //     }
      //   };
        


{/*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/}
  return(
    question.length > 0 ?

    <div className='container' >
        <QuestionsAnswersTemplate data={question[currentIndex]} allQuestions={allQuestions} />
     </div> : "Just a little bit of patience, please"

  )

}

export default TriviaRequestHistory;