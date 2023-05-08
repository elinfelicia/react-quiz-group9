// TO DO


// create loop to continue getting questions
// check that score works correctly


import React, { useState, useRef } from "react";

//not PascalCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({
    data: {question, answers, correct_answer}, allQuestions
}) => {


  
    const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState (0)
    const buttonRef = useRef(null);

      const clickHandle = (answer, event) => {
       // console.log(correct_answer);
         //  console.log(answer);
         buttonRef.current.disabled = true;
        if (answer === correct_answer) {
           console.log("yay");
          setScore(score + 1);
          setShowAnswers(true); 
         } else {
          console.log("nay");
         setShowAnswers(true);
        }

        allQuestions()
     };


  return (
    <>
      <div className="d-flex flex-column align-items-center container mt-5">
        <h1>SCORE</h1>
        <div className=" btn btn-info">{score}</div> 
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
              const changeBtnStyle = showAnswers ? (
                 answer === correct_answer ? "btn btn-success": "btn btn-danger"
             ) : ""; 
            return (
              <button ref={buttonRef}
                onClick={(event) => clickHandle(answer)}
                className={`btn btn-primary mt-2 ${changeBtnStyle}`}
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
