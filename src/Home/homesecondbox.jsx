import React from 'react'
import image1 from '../assets/steven-ungermann-aRT5UCf2MYY-unsplash.png'
import image2 from '../assets/andrew-ruiz-fmz-B9At9iQ-unsplash.png'
import image3 from '../assets/location-icons.png'


const HomeSecondBox = () => {
  return (
    <div className='homesecondbox'>
      <div className='homesecondbox-text'>
      <p>All our room types are including complementary breakfast</p></div>
      <div className='homesecondbox-info'>
        <div className='info-text'>
          <h1>Luxury redefined</h1>
          <p>Our rooms are designed to transport <br />
you into an environment made for leisure. <br />
Take your mind off the day-to-day of home <br />
life and find a private paradise for yourself. <br /> </p>
<div className='info-explore-btn'>EXPLORE</div>
        </div>
        <div className='indo-img'>
          <img src={image1}  alt="image1" />
        </div>
      </div>
      <div className='homesecondbox-info'>
      <div className='info-text'>
          <h1>Leave your worries in <br />
the sand</h1>
          <p>We love life at the beach. Being close <br />
to the ocean with access to endless sandy <br />
beach ensures a relaxed state of mind. It <br />
seems like time stands still watching the <br />
ocean. <br /> </p>
<div className='info-explore-btn'>EXPLORE</div>
        </div>
        <div className='indo-img'>
          <img src={image2}  alt="image2" />
        </div>
    </div>
    <div className='homesecondbox-locations'>
      <h1>Testimonials</h1>
      <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
      <p> Mr. and Mrs. Baxter, UK</p>
      <div className='location-icon'>
        <img src={image3} alt="icon3" />
      </div>
    </div>

     </div>
  )
}

export default HomeSecondBox