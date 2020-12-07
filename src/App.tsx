import React, { useEffect } from 'react'
import './App.css'
import Routes from './route' 
import { CheckAuthentication } from "./route/CheckAuthentication"


const App: React.FC = () => {

  useEffect(() => {
    CheckAuthentication()
  }, [])

  return (
    <div className="App">
      <Routes/>
    </div>
  )
}

export default App
