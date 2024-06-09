import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Programmation from './components/Programmation'
import Informations from './components/Informations'
import Login from './components/Login'
import Lieux from './components/Lieux'


function AppRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" element={<Login />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/lieux" element={<Lieux />} />
      </Routes>
    </div>
  )
}

export default AppRoutes