import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Annonce from './pages/Annonce'

function Router() {
  return (
    <React.StrictMode>
      {/* Define the routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/annonce/:annonceId" element={<Annonce />} />
          <Route exact path="/a-propos" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </React.StrictMode>
  )
}

export default Router
