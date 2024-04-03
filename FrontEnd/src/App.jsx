import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from './Pages/About'
import Home from './Pages/Home'
import Appointment from './Pages/Appointment'
import Portfolio from './Pages/Portfolio'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Blog from './Pages/Blog'
import Quiz from './Pages/Quiz'
import QuizResult from './Pages/QuizResult'

function App() {

  return (
    <>
    <Router>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/expert" element={<Appointment/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Resources" element={<Portfolio/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Quiz" element={<Quiz/>}></Route>
          <Route path="/QuizResult" element={<QuizResult/>}></Route>

        </Routes>
      </Router>
      
    </>
  )
}

export default App
