
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

import Questions from './components/Questions';



import MainPage from "./pages/MainPage";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={
          <PrivateRoute>
            {/* Insert Start page of game/categories page here */}
            <div>
      
      <div >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route  path="/history" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=23&type=multiple"}/>} />
        <Route  path="/mythology" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=20&type=multiple"}/>} />
        <Route  path="/computer-science" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=18&type=multiple"} />}/>
        <Route   path="/literature" element={<Questions url={"https://opentdb.com/api.php?amount=12&category=10&type=multiple"}/>} />
      </Routes>
      
      </div>
    </div>
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
