import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import RulesPage from './pages/RulesPage'
import OptionsPage from './pages/OptionPage'
import GamePage from './pages/GamePage'
import AboutPage from './pages/AboutPage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Route, Routes, Navigate } from 'react-router'
import './App.css'
import ResultsPage from './pages/ResultsPage'
import { defaultPlayerData } from './data/defaultPlayerData'
import Players from './classes/Player'


function App() {

  const playerArray = [];
  const defaultArray = [];

  defaultPlayerData.forEach(function(playerData) {

    playerArray.push( new Players(playerData[0], playerData[1], playerData[2], playerData[3]))
    defaultArray.push( new Players(playerData[0], playerData[1], playerData[2], playerData[3]))
  });

  const [thePlayers, setThePlayers] = useState(playerArray);
  const [defaultPlayers, setDefaultPlayers] = useState(defaultArray)

  useEffect(()=> {
  
    console.log(thePlayers);
  }, [thePlayers]);

  return (
    <div id='body-container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rules' element={<RulesPage />} />
        <Route path='/options' element={<OptionsPage thePlayers={thePlayers} setThePlayers={setThePlayers} defaultPlayers={defaultPlayers}/>} />
        <Route path='/game' element={<GamePage thePlayers={thePlayers} setThePlayers={setThePlayers} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/results' element={<ResultsPage />} />
        <Route path='*' element={<Navigate to='/' />} />'
      </Routes>
      <Footer />
    </div>
  )
}

export default App
