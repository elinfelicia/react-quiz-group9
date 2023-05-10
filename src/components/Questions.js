import React, { useEffect, useState, useRef } from "react";

import Axios from "axios";
// import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';

import QuestionsAnswersTemplate from "./QuestionsAnswersTemplate";
import clickHandle from "./QuestionsAnswersTemplate";
import { click } from "@testing-library/user-event/dist/click";

const TriviaRequestHistory = () => {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showAnswers, setShowAnswers] = useState(false);

  
    const [score, setScore] = useState (0)
    const [disabled, setDisabled] = useState(false);
    const[toggle,setToggle] = useState(true)
    const ref = useRef(null);

  useEffect(() => {
    if (currentIndex < question.length) {
      const newIndex = currentIndex + 1;
      console.log(newIndex);
      setCurrentIndex(newIndex);
    }
  }, [question]);

  // need to fetch 12 questions indstead of 10 bc i lost two indexes somewhere in the code

  const url = "https://opentdb.com/api.php?amount=12&category=23&type=multiple";

  useEffect(() => {
    Axios.get(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data.results);
        // settAllQ(data.results)

        {
          /*we need to modify object from db to be able to manipulate its constituents*/
        }
        const question = data.results.map((q) => ({
          ...q,
          answers: [q.correct_answer, ...q.incorrect_answers].sort(
            () => 0.5 - Math.random()
          ),
        }));

        setQuestion(question);
        // settAllQ(data.results)
      });
  }, []);

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
    setDisabled(!disabled)
   
    // if (question.answer === question.correct_answer) {
    //   //       console.log("yay");
    //         setScore(score + 1);
      //  }
  };

  useEffect(() => {
    if(disabled) {
      setDisabled(!disabled)
      setToggle(false)
      
    }

  }, [question])


     const clickHandle = (answer, correct_answer) => {
       setDisabled(true);
       setToggle(true)
      // console.log(correct_answer);
        //  console.log(answer);
       //  buttonRef.current.disabled = true;
      if (answer === correct_answer) {
    //       console.log("yay");
          setScore(score + 1);
         setShowAnswers(true); 
         
        
       
     } else {
    //      console.log("nay");
      setShowAnswers(true);
       
       }
      
    //  console.log(score)
    };

  {
    /*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/
  }
  return question.length > 0 ? (
    <div className="container h-100 d-flex  align-items-center justify-content-center">
      {currentIndex >= question.length ? (
        <h1>
          END OF THE GAME. Your score is {score}
        </h1>
      ) : (
        <QuestionsAnswersTemplate
          data={question[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          clickHandle={clickHandle}
          disabled={disabled}
          score={score}
          toggle={toggle}
         
        />
      )}
    </div>
  ) : (
    <div> Some patience please </div>
  );
};

export default TriviaRequestHistory;
