import React from 'react'

const Example = ({data: {questions, index}}) => {
  return (
    <>

    <div>
        <h2>{[questions][index]}</h2>
    </div>
    </>
  )
}

export default Example