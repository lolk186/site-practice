import React from 'react'
import facebook from '../../foto/fotoCities/Блок7/facebook.png';
import instagram from '../../foto/fotoCities/Блок7/instagram.png';
import youtube from '../../foto/fotoCities/Блок7/youtube.png';
import integrall from '../../foto/fotoCities/Блок7/integrall.png';
import tiktok from '../../foto/fotoCities/Блок7/tiktok.png';
import style12 from '../../styles/stylesCities/style7.css';

function Block7Component() {
  return (
    <div className='citiesBlock7zvet11'>
    <button className='citiesBlock7knopkaVverch'>↑</button>
    <div className='citiesBlock7all11'>
      <div className='citiesBlock7big1_11'>
        <p className='citiesBlock7text1_11'>Explorer</p>
        <div className='citiesBlock7span1_11'>
          <p className='citiesBlock7textSpan1_11'>Electric bikes</p>
          <p className='citiesBlock7textSpan1_11'>City bikes</p>
          <p className='citiesBlock7textSpan1_11'>Kids' bikes</p>
          <p className='citiesBlock7textSpan1_11'>Accessories</p>
          <p className='citiesBlock7textSpan1_11'>Outlet</p>
          <p className='citiesBlock7textSpan1_11'>Business</p>
          <p className='citiesBlock7textSpan1_11'>Insurance Electric</p>
          <p className='citiesBlock7textSpan1_11'>Size guide</p>
        </div>
      </div>
      <div className='citiesBlock7big2_11'>
        <p className='citiesBlock7text2_11'>About</p>
        <div className='citiesBlock7span2_11'>
          <p className='citiesBlock7textSpan2_11'>About us</p>
          <p className='citiesBlock7textSpan2_11'>Journal</p>
          <p className='citiesBlock7textSpan2_11'>Reviews</p>
          <p className='citiesBlock7textSpan2_11'>Press</p>
          <p className='citiesBlock7textSpan2_11'>Jobs</p>
        </div>
      </div>
      <div className='citiesBlock7big3_11'>
        <p className='citiesBlock7text3_11'>Help</p>
        <div className='citiesBlock7span3_11'>
          <p className='citiesBlock7textSpan3_11'>Contact</p>
          <p className='citiesBlock7textSpan3_11'>FAQ</p>
          <p className='citiesBlock7textSpan3_11'>Delivery</p>
          <p className='citiesBlock7textSpan3_11'>Assembly & manuals</p>
          <p className='citiesBlock7textSpan3_11'>Payment options</p>
          <p className='citiesBlock7textSpan3_11'>Privacy policy</p>
          <p className='citiesBlock7textSpan3_11'>Terms & conditions</p>
        </div>
      </div>
      <div className='citiesBlock7spanEnd11'>
        <p className='citiesBlock7textOther1'>Join the ride.</p>
        <p className='citiesBlock7textOther2'>Sign up for our newsletter.</p>
        <div>
          <input placeholder='Enter your email address here' className='citiesBlock7input11_1'></input>
          <button className='citiesBlock7knopka11_1'>Subscribe</button>
        </div>
        <div className='citiesBlock7galka11'>
          <input type='checkbox' className='citiesBlock7galka11_1'></input>
          <p className='citiesBlock7textGalka11_1'>By signing up, I agree to the privacy policy of Veloretti.</p>
        </div>
        <div className='citiesBlock7photo11'>
          <img src={facebook} className='citiesBlock7facebook'></img>
          <img src={instagram} className='citiesBlock7instagram'></img>
          <img src={youtube} className='citiesBlock7youtube'></img>
          <img src={integrall} className='citiesBlock7integrall'></img>
          <img src={tiktok} className='citiesBlock7tiktok'></img>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Block7Component