// TO DO


// create loop to continue getting questions
// check that score works correctly


import React, { useState } from "react";

//not PascalCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({
    data: {question, answers, correct_answer}
}) => {


  
    const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState (0)
    

      const clickHandle = (answer) => {
       // console.log(correct_answer);
         //  console.log(answer);
    
        if (answer === correct_answer) {
           console.log("yay");
          setScore(score + 1);
          setShowAnswers(true); 
          console.log({data: {question, answers, correct_answer}})
           
         

          
         } else {
          console.log("nay");
         setShowAnswers(true);
        }
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
              <button 
                onClick={() => clickHandle(answer)}
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
