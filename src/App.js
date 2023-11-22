import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage"
import CelebritiesPage from "./page/CelebritiesPage"
import CelebrityPage from "./page/CelebrityPage"
import RandomCelebrityPage from "./page/RandomCelebrityPage"
import TvSpeakersPage from "./page/TvSpeakersPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/celebrities" element={<CelebritiesPage />} />
        <Route path="/celebrities/:celebrityId" element={<CelebrityPage />} />
        <Route path="/celebrities/random" element={<RandomCelebrityPage />} />
        <Route path="/tvspeakers" element={<TvSpeakersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
