import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import QuestionsAnswersTemplate from './QuestionsAnswersTemplate';

const TriviaRequestHistory = () => {
    const [question, setQuestion] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


   

    // const fetchTrivia = async () => {
    //     let response = await fetch (
    //         "https://opentdb.com/api.php?amount=10&category=23&type=multiple"
    //     );
    //     const data = await response.json();
    //     setQuestion(data);   
    // };

    // useEffect(() => {
    //     fetchTrivia();
    // }, []);

    const url = "https://opentdb.com/api.php?amount=10&category=23&type=multiple";

    useEffect(() =>{
        Axios.get(url)
          .then(res => res.data)
          .then(data => {
            console.log(data.results)
            {/*we need to modify object from db to be able to manipulate its constituents*/}
            const question = data.results.map((q) => ({
                ...q,
                answers:[q.correct_answer, ...q.incorrect_answers].sort(() =>  0.5 - Math.random())
            }))

            setQuestion(question)
            })
      },[])

{/*created conditions just to avoid error "question undefined" bc data can still be in the process of fetching*/}
  return(
    question.length > 0 ?
    <div className='container'>
        <QuestionsAnswersTemplate data={question[currentIndex]}/>
     </div> : "Just a little bit of patience, please"

  )

}

export default TriviaRequestHistory;