import { useState } from 'react'
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import OptionsPage from './pages/OptionPage'
import GamePage from './pages/GamePage'
import AboutPage from './pages/AboutPage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Route, Routes, Navigate } from 'react-router'
import './App.css'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rules' element={<RulesPage />} />
        <Route path='/options' element={<OptionsPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<Navigate to='/' />} />'
      </Routes>
      <Footer />
    </>
  )
}

export default App
