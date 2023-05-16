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
import TestPR from "./components/TestPR";

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
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/TestPR" element={
                <PrivateRoute>
                  <TestPR />
                </PrivateRoute>
                } />
              <Route
                path="/history"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=23&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/mythology"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=20&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/computer-science"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=18&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/literature"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=10&type=multiple"
                    }
                  />
                }
              ></Route>
            </>
      </Routes>
      
  <Footer/></div>

  
  );
}

export default App;
