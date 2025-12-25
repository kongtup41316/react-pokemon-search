import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/ui/button'
import Header from './components/ui/components/Header'

function App() {

  return (
    <div className='h-screen flex flex-col'>
      <div className="h-[20%]">
        <Header />
      </div>
      <div className='flex justify-center items-center h-20'>
        <Button>Click me</Button>
      </div>
    </div>
  )
}

export default App
