import React from 'react'
import SeoReport from './pages/seoReport/SeoReport'
import Crawler from './pages/crawler/Crawler'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SeoReport/>} />
            <Route path="/seo-report" element={<SeoReport/>} />
            <Route path="/crawler" element={<Crawler />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
