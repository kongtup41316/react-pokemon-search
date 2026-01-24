import { useState } from 'react'
import './App.css'
import Header from './components/ui/components/Header'
import DarkMain from './components/ui/components/DarkMain'
import LightMain from './components/ui/components/LightMain'
import DarkModeToggle from './components/ui/components/DarkModeToggle'
import SearchSection from './components/ui/components/SearchSection'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const Theme = darkMode ? DarkMain : LightMain;

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex items-center justify-between'>
        <Header>
          {/* {darkMode} is from App.jsx darkMode is from DarkModeToggle component */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Header>
      </div>
      <main>
        <div className='flex flex-col items-center h-screen mt-10'>
          <SearchSection />
          {/* <Theme /> */}
        </div>
      </main>
    </div>
  )
}

export default App
