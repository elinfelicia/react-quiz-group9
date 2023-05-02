import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Questions from './components/Questions';
import QuestionsAnswersTemplate from './components/QuestionsAnswersTemplate';

function App() {
  return (
    <div>
      <Questions/>
    </div>
  );
}

export default App;
