import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dataLogo from '/datapath-logo.png'
import BlankLayout from './layouts/BlankLayout'
import FullLayout from './layouts/FullLayout'
import LandingPage from './pages/landing/LandingPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Application from './pages/app/Application'
import Dashboard from './pages/app/principal/Dashboard'
import Configuration from './pages/app/extra/Configuration'
import Courses from './pages/app/content/Courses'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<BlankLayout children={<Login />} />} />
          <Route path='/register' element={<BlankLayout children={<Register />} />} />
          <Route path='/app' element={<Application />} />
          <Route path='/app/dashboard' element={<Application children={<Dashboard />} />} />
          <Route path='/app/courses' element={<Application children={<Courses />} />} />
          <Route path='/app/events' element={<Application children={<Dashboard />} />} />
          <Route path='/app/settings' element={<Application children={<Configuration />} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
