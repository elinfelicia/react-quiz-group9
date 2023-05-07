// TO DO


// create loop to continue getting questions
// check that score works correctly


import React, { useState } from "react";
import {} from "./QuestionAnswers.css";

//not PascalCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({
    data: {question, answers, correct_answer}, handleAnswerOptionClick, score
}) => {


  
    // const [showAnswers, setShowAnswers] = useState(false);

    // const clickHandle = (answer) => {
    //     // console.log(correct_answer);
    //     //  console.log(answer);
    
    //     if (answer === correct_answer) {
    //       console.log("yay");
    //       setScore(score + 1);
    //       setShowAnswers(true);  
         

          
    //     } else {
    //       console.log("nay");
    //       setShowAnswers(true);
    //     }
    //   };


  return (
    <>
      <div className="container mt-5">
        <h1>SCORE</h1>
        <div>{score}</div> 
      </div>
      <div className="container mt-5">
        <div>
          {/*dangerouslySetInnerHTML was added for correct rendering of text*/}
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{ __html: question }}
            key={question.id}
          />
        </div>
        <div className="d-flex flex-column">
          {answers.map((answer, index) => {
            //  const changeBtnStyle = showAnswers ? (
            //     answer === correct_answer ? "green-button": "red-button"
            // ) : ""; className={`normal-button ${changeBtnStyle}`} 
            return (
              <button 
                onClick= {handleAnswerOptionClick}
                // onClick={clickHandle(answer)}
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionsAnswersTemplate;
