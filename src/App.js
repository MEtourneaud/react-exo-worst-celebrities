import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CelebritiesPage from "./page/CelebritiesPage"
import CelebrityPage from "./page/CelebrityPage"
import RandomCelebrityPage from "./page/RandomCelebrityPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<CelebritiesPage />} />
        <Route path="/celebrities/:celebrityId" element={<CelebrityPage />} />
        <Route path="/celebrities/random" element={<RandomCelebrityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
