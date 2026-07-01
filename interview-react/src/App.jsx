import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
// import signup from './pages/Signup'
import Signup from './pages/Signup'
import AllRoutes from './Routes/AllRoutes'

function App() {

  return (
    <>
   <Navbar/>
   <AllRoutes/>
     </>
  )
}

export default App
