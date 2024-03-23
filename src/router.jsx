import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import HomeFirstBox from '../src/Home/homefirstbox'
import FooterComponent from './footer'
import Facilities from './Facilities/facilities'
import Rooms from './rooms/roomsfirst'
import ContacUs from './Contact-us/contactus'




const RouterComponent = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomeFirstBox/> }/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/rooms' element={<Rooms/> }/>
      <Route path='/contactus' element={<ContacUs/>}/>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default RouterComponent