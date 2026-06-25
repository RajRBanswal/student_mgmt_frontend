import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About'
import Layouts from './components/Layouts'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layouts}>
            <Route index Component={Home} />
            <Route path='about' Component={About} />
            <Route path='contact' Component={Contact} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
