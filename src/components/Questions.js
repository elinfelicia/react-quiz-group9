import React, {useEffect, useState } from 'react'

import Axios from 'axios';
import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';

const TriviaRequestHistory = () => {
    const [question, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState (0)
   
    const [disabled, setDisabled] = useState(false);
  
    useEffect(() => { 
      if (currentIndex < question.length){ 
        const newIndex = currentIndex + 1;
        console.log(newIndex)
        setCurrentIndex(newIndex)}
    }, [question])






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


    // const allQuestions = () => {
    //   // for (let i=0; i < question.length; i++) {
    //   //   console.log(question[i])
    //   // }

    //   const nextQuestion = question[currentIndex + 1];
      
      
    //   if (currentIndex < question.length) {
    //     setCurrentIndex(currentIndex)
    //     console.log(currentIndex)
    //     console.log(nextQuestion)
    //     setQuestion(nextQuestion)
 
        
    //   }
      
    //   else {
    //     console.log("meow")
    //   }
      // setCurrentIndex(currentIndex + 1);

    // }
        

    // const handleAnswer = (answer) => {
    //   if(!showAnswers){
    //     if(answer === question[currentIndex].correct_answer){
    //       setScore(score+1);
    //       setDisabled(false)
    //     }
    //   }
      
  
    //   setShowAnswers(true);
      
    // }
  
    const handleNextQuestion = () => {

      setCurrentIndex(currentIndex+1);
      setShowAnswers(false);
      
    }

{/*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/}
  return(
   
    question.length > 0 ? (

    <div className='container' >
      {currentIndex >= question.length ? (<h1>Game Ended</h1>) : (
        <QuestionsAnswersTemplate data={question[currentIndex]}  
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}/>)}
     </div>) : <div> Some patience please </div>
     

 
  )

}

export default TriviaRequestHistory;