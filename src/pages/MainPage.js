import React from 'react'

import { Link} from 'react-router-dom'


const MainPage = () => {

  return (
    
    <div className='d-flex flex-row align-items-center justify-content-center h-100 mt-5 pt-5'>
    <div className='d-grid gap-2 col-6 mx-5 my-5'>

    <button className='btn btn-warning btn-lg '><Link className='text-decoration-none text-body h1' to="history">History</Link></button>
    <button className='btn btn-warning btn-lg'><Link className='text-decoration-none text-body h1' to="mythology">Mythology</Link></button>
    <button className='btn btn-warning btn-lg'><Link className='text-decoration-none text-body h1' to="computer-science">Computer Science</Link></button>
    <button className='btn btn-warning btn-lg'><Link  className='text-decoration-none text-body h1' to="literature">Literature</Link></button>
    
    
   </div>
   </div>
   
  )
}

export default MainPage