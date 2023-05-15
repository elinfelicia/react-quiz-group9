import { BrowserRouter, Route, Routes, useNavigate, Redirect  } from "react-router-dom";


import Questions from './components/Questions';
import QuestionsAnswersTemplate from './components/QuestionsAnswersTemplate'


import MainPage from "./pages/MainPage";
import HeroSection from "./pages/HeroSection";



function App() {
  const navigate = useNavigate();


  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div>
      
      <div >
      {/* <div className="d-flex flex-row justify-content-center">
       <button className="btn btn-dark btn-lg mt-5" onClick={navigateHome}>Home</button> 
       </div> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route  path="/history" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=23&type=multiple"}/>} />
        <Route  path="/mythology" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=20&type=multiple"}/>} />
        <Route  path="/computer-science" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=18&type=multiple"} />}/>
        <Route   path="/literature" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=10&type=multiple"}/>} />
      </Routes>
     {/* <HeroSection /> */}
      {/* <Routes>
      <Route path="/" exact element={<HeroSection />}></Route> 
        <Route path="/history" exact element={<Questions />}></Route> 
      </Routes> */}
      
      </div>
    </div>
  );
}

export default App;
