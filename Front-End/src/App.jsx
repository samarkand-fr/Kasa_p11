import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Router'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
