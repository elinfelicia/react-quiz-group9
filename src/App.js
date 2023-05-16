import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/navBar";
import Questions from "./components/Questions";
import Footer from "./components/footer";
import MainPage from "./pages/MainPage";
import CategoriesRouting from "./pages/CategoriesRouting";

function App() {
  return (
    


  <div> 
    {/* <NavBar/> */}
       
       <Routes>
        
      
        {/* <Route path="/" element={<Home />} /> 
        <Route
        path="/user"
      element={ */}
            <>
              {/* <Route path="/" element={<MainPage />}></Route>  */}
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/quiz/*" element={<CategoriesRouting/>} /> 
            
            </>
      </Routes>
      
  <Footer/></div>

  
  );
}

export default App;
