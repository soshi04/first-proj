import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import PicTest from './pages/PicTest'
import MainPage from './pages/MainPage'

/**
 * This defines our React functional component called App.
 * React components are functions that !! return JSX !! (the stuff that renders on the page).
 */
function MyButton(){
  return(
    <button>click</button>
  )
}

function MyOtherButton(){
  return (
    <button>other one</button>
  )
}
function App() {
  return(
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/PicTest" element={<PicTest />} />
  </Routes>
  )
}

export default App
