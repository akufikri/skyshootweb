import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import Navbar from './Components/Navbar'
import PrivateShoot from './Page/PrivatShoot'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shoping/privat-shoot' element={<PrivateShoot />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
