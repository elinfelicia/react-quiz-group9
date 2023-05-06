import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={
          <PrivateRoute>
            {/* Insert Start page of game here */}
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
