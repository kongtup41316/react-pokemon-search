import { useState } from 'react'
import './App.css'
import Header from './components/ui/components/Header'
import DarkMain from './components/ui/components/DarkMain'
import LightMain from './components/ui/components/LightMain'
import DarkModeToggle from './components/ui/components/DarkModeToggle'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <div>
        <Header />
        <DarkModeToggle />
      </div>
      <main className="flex flex-1">
        <LightMain />
      </main>
    </div>
  )
}

export default App
