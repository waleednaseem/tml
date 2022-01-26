import React,{useEffect} from 'react'
import SignUp from './LoginRegister/SignUp'
import Login from './LoginRegister/Login'
import MainPage from './Component/MainPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useSelector} from 'react-redux'


export default function App() {
  const login = localStorage.getItem('Login')
  const data= useSelector((state) => state)
 console.log(data);
  
  return (

    <Router>
      <Routes>
        {
          login ?
            <Route path='/' element={<MainPage />} /> :
            <Route path='/' element={<Login />} />
        }
      </Routes>
    </Router>

  )
}
