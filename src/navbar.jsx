import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="navbar">
    <div class = "nav-left">
      <div class="nav-logo">
      <Link to="/" style={{textDecoration:"none", color:"black"}}>
        <h2>LUXURY </h2>
        <p>HOTELS</p></Link>
        </div>
    </div>
    <div class="nav-right">
      <Link to="/" style={{textDecoration:"none", color:"white"}}>
        <p>Home</p></Link>
        <Link to="/facilities" style={{textDecoration:"none", color:"white"}}> 
        <p>Facilities</p></Link>
        <Link to="/rooms" style={{textDecoration:"none", color:"white"}}> 
        <p>Rooms</p> </Link>
        <Link to="/contactus" style={{textDecoration:"none", color:"white"}}> 
        <p>Contact-us</p></Link>
    </div>
    </div>
  )
}

export default Navbar