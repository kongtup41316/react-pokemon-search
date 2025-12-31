import { useState } from 'react'
import './App.css'
import Header from './components/ui/components/Header'
import Main from './components/ui/components/Main'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <div className="h-[10%]">
        <Header />
      </div>
      <div className="flex flex-1">
        <Main />
      </div>
    </div>
  )
}

export default App
