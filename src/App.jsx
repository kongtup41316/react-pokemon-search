import { useState } from 'react'
import './App.css'
import Header from './components/ui/components/Header'
import DarkMain from './components/ui/components/DarkMain'
import LightMain from './components/ui/components/LightMain'
import DarkModeToggle from './components/ui/components/DarkModeToggle'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex items-center justify-between'>
        <Header>
          {/* {darkMode} is from App.jsx darkMode is from DarkModeToggle component */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Header>
      </div>
      <main className="flex flex-1">
        {darkMode ? <DarkMain /> : <LightMain />}
      </main>
    </div>
  )
}

export default App
