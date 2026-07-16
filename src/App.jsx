import { useState } from 'react'
import './App.css'
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About'
import Layouts from './components/Layouts'
import Contact from './components/Contact'
import AdminLayouts from './components/admins/AdminLayouts'
import AdminDashboard from './components/admins/AdminDashboard'
import StudentManagement from './components/admins/StudentManagement'
import AdminLogin from './components/admins/AdminLogin'
import UserRegister from './components/UserRegister'
import Login from './components/Login'
import studentDashboard from './components/students/studentDashboard'
import StudentLayouts from './components/students/StudentLayouts'
import SAttendence from './components/students/SAttendence'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layouts}>
            <Route index Component={Home} />
            <Route path='about' Component={About} />
            <Route path='contact' Component={Contact} />
            <Route path='user-register' Component={UserRegister} />
            <Route path='user-login' Component={Login} />
          </Route>
          <Route path='/admin-login' Component={AdminLogin} />
          <Route path='/admin' Component={AdminLayouts}>
            <Route index Component={AdminDashboard} />
            <Route path='student-management' Component={StudentManagement} />
          </Route>

          <Route path='/students' Component={StudentLayouts}>
            <Route index Component={studentDashboard} />
            <Route path='student-attendence' Component={SAttendence} />
          </Route>




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
