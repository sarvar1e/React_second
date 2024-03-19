import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'

const RouterComponent = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes></Routes>

    </BrowserRouter>
  )
}

export default RouterComponent