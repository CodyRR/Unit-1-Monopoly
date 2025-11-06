import { useState } from 'react'
import HomePage from './pages/HomePage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div>
        <HomePage />
      </div>
      <Footer />
    </>
  )
}

export default App
