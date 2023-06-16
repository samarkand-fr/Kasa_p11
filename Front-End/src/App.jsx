import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Annonce from './pages/Annonce'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/annonce/:annonceId" element={<Annonce />} />
          <Route exact path="/a-propos" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App