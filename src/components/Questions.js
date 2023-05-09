import React, {useEffect, useState } from 'react'

import Axios from 'axios';
// import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';



import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';



const TriviaRequestHistory = () => {
    const [question, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [showAnswers, setShowAnswers] = useState(false);
  

  
    useEffect(() => { 
      if (currentIndex < question.length){ 
        const newIndex = currentIndex + 1;
        console.log(newIndex)
        setCurrentIndex(newIndex)}
    }, [question])




    // need to fetch 12 questions indstead of 10 bc i lost two indexes somewhere in the code 

    const url = "https://opentdb.com/api.php?amount=12&category=23&type=multiple"; 

    useEffect(() =>{
        Axios.get(url)
          .then(res => res.data)
          .then(data => {
            console.log(data.results)
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




  
    const handleNextQuestion = () => {

      setCurrentIndex(currentIndex+1);
      setShowAnswers(false);

       
      }

    


{/*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/}
  return(
   
    question.length > 0 ? (

    <div className='container h-100 d-flex  align-items-center justify-content-center' >
      {currentIndex >= question.length ? (<h1>END OF THE GAME</h1>) : (
        <QuestionsAnswersTemplate data={question[currentIndex]}  
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}/>)}
     </div>) : <div> Some patience please </div>
     

 
  )

}

export default TriviaRequestHistory;