import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import CategoriesRouting from "./pages/CategoriesRouting";

function App() {
  return (
<div>
    <NavBar/>        
        <Routes>
            <>
              <Route path="*" element={
                <PrivateRoute>
                  <CategoriesRouting/>
                </PrivateRoute>
                } 
              />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </>
        </Routes>    
  <Footer/>
</div>
  
  );
}

export default App;
