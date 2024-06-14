import React from 'react'
import facebook from '../../foto/fotoAboutUs/Блок9/facebook.png';
import instagram from '../../foto/fotoAboutUs/Блок9/instagram.png';
import youtube from '../../foto/fotoAboutUs/Блок9/youtube.png';
import integrall from '../../foto/fotoAboutUs/Блок9/integrall.png';
import tiktok from '../../foto/fotoAboutUs/Блок9/tiktok.png';
import style12 from '../../styles/stylesAboutUs/style9.css';

function Block9Component() {
  return (
<div className='aboutBlock9zvet11'>
    <button className='aboutBlock9knopkaVverch'>↑</button>
    <div className='aboutBlock9all11'>
      <div className='aboutBlock9big1_11'>
        <p className='aboutBlock9text1_11'>Explorer</p>
        <div className='aboutBlock9span1_11'>
          <p className='aboutBlock9textSpan1_11'>Electric bikes</p>
          <p className='aboutBlock9textSpan1_11'>City bikes</p>
          <p className='aboutBlock9textSpan1_11'>Kids' bikes</p>
          <p className='aboutBlock9textSpan1_11'>Accessories</p>
          <p className='aboutBlock9textSpan1_11'>Outlet</p>
          <p className='aboutBlock9textSpan1_11'>Business</p>
          <p className='aboutBlock9textSpan1_11'>Insurance Electric</p>
          <p className='aboutBlock9textSpan1_11'>Size guide</p>
        </div>
      </div>
      <div className='aboutBlock9big2_11'>
        <p className='aboutBlock9text2_11'>About</p>
        <div className='aboutBlock9span2_11'>
          <p className='aboutBlock9textSpan2_11'>About us</p>
          <p className='aboutBlock9textSpan2_11'>Journal</p>
          <p className='aboutBlock9textSpan2_11'>Reviews</p>
          <p className='aboutBlock9textSpan2_11'>Press</p>
          <p className='aboutBlock9textSpan2_11'>Jobs</p>
        </div>
      </div>
      <div className='aboutBlock9big3_11'>
        <p className='aboutBlock9text3_11'>Help</p>
        <div className='aboutBlock9span3_11'>
          <p className='aboutBlock9textSpan3_11'>Contact</p>
          <p className='aboutBlock9textSpan3_11'>FAQ</p>
          <p className='aboutBlock9textSpan3_11'>Delivery</p>
          <p className='aboutBlock9textSpan3_11'>Assembly & manuals</p>
          <p className='aboutBlock9textSpan3_11'>Payment options</p>
          <p className='aboutBlock9textSpan3_11'>Privacy policy</p>
          <p className='aboutBlock9textSpan3_11'>Terms & conditions</p>
        </div>
      </div>
      <div className='aboutBlock9spanEnd11'>
        <p className='aboutBlock9textOther1'>Join the ride.</p>
        <p className='aboutBlock9textOther2'>Sign up for our newsletter.</p>
        <div>
          <input placeholder='Enter your email address here' className='aboutBlock9input11_1'></input>
          <button className='aboutBlock9knopka11_1'>Subscribe</button>
        </div>
        <div className='aboutBlock9galka11'>
          <input type='checkbox' className='aboutBlock9galka11_1'></input>
          <p className='aboutBlock9textGalka11_1'>By signing up, I agree to the privacy policy of Veloretti.</p>
        </div>
        <div className='aboutBlock9photo11'>
          <img src={facebook} className='aboutBlock9facebook'></img>
          <img src={instagram} className='aboutBlock9instagram'></img>
          <img src={youtube} className='aboutBlock9youtube'></img>
          <img src={integrall} className='aboutBlock9integrall'></img>
          <img src={tiktok} className='aboutBlock9tiktok'></img>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Block9Component