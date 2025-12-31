import { useState } from 'react'
import './App.css'
import Header from './components/ui/components/Header'
import DarkMain from './components/ui/components/DarkMain'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <div>
        <Header />
      </div>
      <main className="flex flex-1">
        <DarkMain />
      </main>
    </div>
  )
}

export default App
