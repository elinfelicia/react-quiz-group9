import React from 'react'
import { Route, Routes } from "react-router-dom";
import MainPage from './MainPage';
import Questions from "../components/Questions";


const CategoriesRouting = () => {
  return (
    <>
    <Routes>
    <Route path="/main" element={<MainPage />} />
              <Route
                path="/main/history"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=23&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/main/mythology"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=20&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/main/computer-science"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=18&type=multiple"
                    }
                  />
                }
              ></Route>
              <Route
                path="/main/literature"
                element={
                  <Questions
                    url={
                      "https://opentdb.com/api.php?amount=12&category=10&type=multiple"
                    }
                  />
                }
              ></Route>

    </Routes>
    </>
  )
}

export default CategoriesRouting