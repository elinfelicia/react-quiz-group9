import React from 'react'

//not camelCasing in props, bc props are copied from trivia api database

const QuestionsAnswersTemplate = ({data:{question, answers}}) => {

  return (
    <>
    <div className="container mt-5">
    <div>
        {/*dangerouslySetInnerHTML was added for correct rendering of text*/}
        <h1  className="text-center"dangerouslySetInnerHTML={{__html: question}} key={question.id} />
    </div>
    <div className="d-flex flex-column">
        {answers.map((answer, index) => {
            return(
                <button key={index} className="m-2" dangerouslySetInnerHTML={{__html: answer}}/>

            )
        })}
    </div>
</div>
</>
  )
}

export default QuestionsAnswersTemplate