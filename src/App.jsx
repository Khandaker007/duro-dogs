import { useState } from 'react'
import { Route, Routes } from "react-router"

// COMPONENTS
import Overview from './pages/overview/overview.component'
import Rarity from './pages/rarity/rarity.component'

import './App.scss'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/rarity' element={<Rarity/>}/>
      </Routes>
    </div>
  )
}

export default App
