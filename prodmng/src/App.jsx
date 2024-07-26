
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Product Management</h1>
      <Navbar/>
      <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='add/' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App
