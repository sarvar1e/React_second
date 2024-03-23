import React from 'react'
import HomeSecondBox from './homesecondbox'
import icon2 from "../assets/scroll-icon.png"
import icon1 from "../assets/logo-btn.png"

const HomeFirstBox = () => {
  return (

    <div class='homefirsbox'>
    <div class='home-background-image'>

      <div style={{display:"flex", flexDirection:"column"}}>
        <div class = 'homefirstbox-text'>
            <p style={{fontSize:"40px"}}>WELCOME TO</p>
            <h1>LUXURY</h1>
            <h3>HOTELS</h3>
            <p style={{fontSize:"20px"}}>Book your stay and enjoy Luxury <br />
              redefined at the most affordable rates.</p>
        </div>
        <div style={{display:"flex", width:"100vw", alignItems:"center", flexDirection:"column"}}>
        <div class='homefirstbox-btn'>
            <img src={icon1} alt="icon" />
            <p>BOOK NOW</p>
        </div>
        <div class='homescroll'>
         <p>Scroll</p>
         <img src={icon2} alt="icon" />
        </div>
        </div>
      </div>
    </div>
    <HomeSecondBox/>
    </div>
  )
}

export default HomeFirstBox