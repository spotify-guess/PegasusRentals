import React from 'react'
import pegasus from './pegasus_logo.png'
import insta from './instagram.png'
import facebook from './facebook.png'
import tiktok from './tiktok.png'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>

        <div className='row'>


            <div className='columns'>

                <div className='logo_name'>

                    <img src={pegasus} alt="" className='logo'></img>
                    <h2>Pegasus</h2>

                </div>

                <div className='slogan'>
                <h3>Where convenience meets affordability.</h3>
                </div>
            </div>



            <div className='columns'>

                <h4>SUBSCRIBE WITH EMAIL FOR DISCOUNT DEALS</h4>

                <div className="email">
                    <input type="email" name="user_email" placeholder=' Email Address...' required/>
                    <button>Subscribe</button>
                </div>
                
            </div>



            <div className='columns'>

                <h4>FOLLOW US</h4>

                <div className='social_media_icons'>
                    <img src={insta} alt="" />
                    <img src={facebook} alt="" />
                    <img src={tiktok} alt="" />
                </div>

                
            </div>



            <div className='columns'>

                <h4>CALL US</h4>

                <h3> +1 (929) 342-8592</h3>

                
            </div>


        </div>

        <div className='copyright'>
            <p>© 2025 by Pegasus | All Rights Reserved | Terms & Conditions</p>
        </div>

    </div>
  )
}

export default Footer