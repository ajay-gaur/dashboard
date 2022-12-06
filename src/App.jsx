// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import Sidebar from "./components/sidebar/Sidebar.jsx"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Seo from './pages/Seo/Seo'
import Crawler from './pages/crawler/Crawler'

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
