import { BrowserRouter, Route, Routes } from "react-router-dom";

import Questions from './components/Questions';
import QA from "./components/QA";

function App() {
  return (
    <div>
      <Questions/>
      {/* <QA /> */}
    </div>
  );
}

export default App;
