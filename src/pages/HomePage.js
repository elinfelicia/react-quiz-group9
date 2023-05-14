import React from 'react'
import Questions from '../components/Questions'
import { Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <h1>CHOOSE A CATEGORY</h1>
    <Routes>
    <Route  path="/TriviaRequest/:url"><Questions /></Route>
    </Routes>
   </>
  )
}

export default HomePage