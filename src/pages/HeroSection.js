import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    // const navigate = useNavigate();
    //  const historyClick = () => navigate('/history');

  return (
    <div>
        <button>History</button>
        <button>Mythology</button>
        <button>Computer Science</button>
        <button>Literature</button>
    </div>
  )
}

export default HeroSection