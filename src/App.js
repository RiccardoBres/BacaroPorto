import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ArtistsPage from './Pages/ArtistsPage';
import MusicPage from './Pages/MusicPage';
import GalleryPage from './Pages/GalleryPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App

