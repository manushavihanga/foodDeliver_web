import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     
     <Navbar setShowLogin={setShowLogin}/>
     <Outlet/>
     <Footer/>
   </div>
    </>
    
  )
}

export default App

