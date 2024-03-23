import React from 'react'
import image1 from './assets/footer-icon.png'
import logo1 from './assets/facebook.png'
import logo2 from './assets/twitter.svg'
import logo3 from './assets/instagram.png'

const FooterComponent = () => {
  return (
    <div className='footer'>
        <div className='footer-first'>
        <img src={image1} alt="icon" />
        <p style={{fontSize:'12px'}}>497 Evergreen Rd. Roseville, CA 95673 <br />
+44 345 678 903 <br />
luxury_hotels@gmail.com <br /></p>
        </div>
        <div className='footer-second'>
            <p>About Us</p>
            <p>Contact</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='footer-third'>
            <div className='footer-third-social'>
            <img src={logo1} alt="logo1" />
            <p>Facebook</p>
            </div>
            <div className='footer-third-social'>
            <img src={logo2} alt="logo2" />
            <p>Twitter</p></div>
            <div className='footer-third-social'>
            <img src={logo3} alt="logo3" />
            <p>Instagram</p></div>
        </div>
        <div className='footer-fourth'>
            <p>Subscribe to our newsletter</p>
            <div className='footer-fourth-submit'>
                <div className='email-text'>
                    <p>Email Address</p>
                </div>
                <div className='email-submit'><p>OK</p></div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent