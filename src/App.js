import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/*add in header here as header should always be visible in all routes!
        but unsure how this works if we want different buttons? */}
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
