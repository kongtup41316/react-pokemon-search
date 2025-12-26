import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/ui/button'
import Header from './components/ui/components/Header'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <div className="h-[10%]">
        <Header />
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default App
