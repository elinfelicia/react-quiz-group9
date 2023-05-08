// TO DO


// create loop to continue getting questions
// check that score works correctly


import React, { useEffect, useState, useRef } from "react";

//not PascalCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({
    data: {question, answers, correct_answer}, currentIndex, handleNextQuestion
}) => {




  const [showAnswers, setShowAnswers] = useState(false);
    const [score, setScore] = useState (0)
   

    const [disabled, setDisabled] = useState(false);
    const ref = useRef(null);
    const[style, setStyle] = useState("blue")

    useEffect(() => {
      if(disabled) {
        setDisabled(!disabled)
        setStyle("pink")
      }
    }, [question])

      const clickHandle = (answer) => {
        setDisabled(true);
       // console.log(correct_answer);
         //  console.log(answer);
        //  buttonRef.current.disabled = true;
        if (answer === correct_answer) {
           console.log("yay");
          setScore(score + 1);
          setShowAnswers(true); 
          
         
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
            key={question[currentIndex]}
          />
        </div>
        <div className="d-flex flex-column">
          {answers.map((answer, index) => {
              const changeBtnStyle = showAnswers ? (
                   answer === correct_answer ? "btn btn-success": "btn btn-danger" 
               ) :  "";
               const newStyle = changeBtnStyle ? "btn btn-primary" :""
               
              
            return (
              <button
                onClick={() => clickHandle(answer)} 
                className={`btn btn-primary mt-2 ${changeBtnStyle}`}  disabled={disabled} 
                ref={ref}
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
                
                // {disabled ? "btn btn-primary" : changeBtnStyle}
              />
  
            );
          })}
        </div> 
      </div>
      <div className="d-flex mt-3 justify-content-center">
        
      {showAnswers && (
      <button className={`btn btn-light`} onClick={()=>  handleNextQuestion()}  disabled={!disabled}>Next Question</button> )}
      
      </div>  
      
      </>
  );
};

export default QuestionsAnswersTemplate;
