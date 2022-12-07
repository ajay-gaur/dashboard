import React from 'react'
import Seo from './pages/Seo/Seo'
import Crawler from './pages/crawler/Crawler'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Seo/>} />
            <Route path="/seo" element={<Seo/>} />
            <Route path="/crawler" element={<Crawler />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
