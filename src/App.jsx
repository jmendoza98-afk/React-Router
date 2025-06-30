import { useState } from 'react'
import { Routes, Route, Link} from "react-router-dom"
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {
  
  return (
    <>
      <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to="/blue">Go to Blue Page</Link>
        <Link to="/red">Go to Red Page</Link>
        <Link to="/">Go to Home Page</Link>
      </div>
      <div id="main-section">
        <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red/>} />
        <Route path="/" element={<Home/>}/>
        </Routes>
        </div>
    </div>
    </>
  )
}

export default App
