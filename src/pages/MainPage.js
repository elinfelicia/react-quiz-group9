import React from 'react'
import Questions from '../components/Questions'
import QuestionsAnswersTemplate from '../components/QuestionsAnswersTemplate'
import { Routes, Route, Link , useNavigate} from 'react-router-dom'


const MainPage = () => {

  return (
    <div className='d-flex flex-row align-items-center justify-content-center'>
    <div className='d-grid gap-2 col-6 mx-5 my-5'>

    <button className='btn btn-warning btn-lg '><Link className='text-decoration-none text-body' to="history">History</Link></button>
    <button className='btn btn-warning btn-lg'><Link className='text-decoration-none text-body' to="mythology">Mythology</Link></button>
    <button className='btn btn-warning btn-lg'><Link className='text-decoration-none text-body' to="computer-science">Computer Science</Link></button>
    <button className='btn btn-warning btn-lg'><Link  className='text-decoration-none text-body' to="literature">Literature</Link></button>
    
    
   </div>
   </div>
  )
}

export default MainPage