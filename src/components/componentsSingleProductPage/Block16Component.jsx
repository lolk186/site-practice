import React from 'react'
import facebook from '../../foto/fotoSingleProductPage/Блок16/facebook.png';
import instagram from '../../foto/fotoSingleProductPage/Блок16/instagram.png';
import youtube from '../../foto/fotoSingleProductPage/Блок16/youtube.png';
import integrall from '../../foto/fotoSingleProductPage/Блок16/integrall.png';
import tiktok from '../../foto/fotoSingleProductPage/Блок16/tiktok.png';
import style16 from '../../styles/stylesSingleProductPage/style16.css';

function Block16Component() {
  return (
    <div className='singleBlock16zvet11'>
    <button className='singleBlock16knopkaVverch'>↑</button>
    <div className='singleBlock16all11'>
      <div className='singleBlock16big1_11'>
        <p className='singleBlock16text1_11'>Explorer</p>
        <div className='singleBlock16span1_11'>
          <p className='singleBlock16textSpan1_11'>Electric bikes</p>
          <p className='singleBlock16textSpan1_11'>City bikes</p>
          <p className='singleBlock16textSpan1_11'>Kids' bikes</p>
          <p className='singleBlock16textSpan1_11'>Accessories</p>
          <p className='singleBlock16textSpan1_11'>Outlet</p>
          <p className='singleBlock16textSpan1_11'>Business</p>
          <p className='singleBlock16textSpan1_11'>Insurance Electric</p>
          <p className='singleBlock16textSpan1_11'>Size guide</p>
        </div>
      </div>
      <div className='singleBlock16big2_11'>
        <p className='singleBlock16text2_11'>About</p>
        <div className='singleBlock16span2_11'>
          <p className='singleBlock16textSpan2_11'>About us</p>
          <p className='singleBlock16textSpan2_11'>Journal</p>
          <p className='singleBlock16textSpan2_11'>Reviews</p>
          <p className='singleBlock16textSpan2_11'>Press</p>
          <p className='singleBlock16textSpan2_11'>Jobs</p>
        </div>
      </div>
      <div className='singleBlock16big3_11'>
        <p className='singleBlock16text3_11'>Help</p>
        <div className='singleBlock16span3_11'>
          <p className='singleBlock16textSpan3_11'>Contact</p>
          <p className='singleBlock16textSpan3_11'>FAQ</p>
          <p className='singleBlock16textSpan3_11'>Delivery</p>
          <p className='singleBlock16textSpan3_11'>Assembly & manuals</p>
          <p className='singleBlock16textSpan3_11'>Payment options</p>
          <p className='singleBlock16textSpan3_11'>Privacy policy</p>
          <p className='singleBlock16textSpan3_11'>Terms & conditions</p>
        </div>
      </div>
      <div className='singleBlock16spanEnd11'>
        <p className='singleBlock16textOther1'>Join the ride.</p>
        <p className='singleBlock16textOther2'>Sign up for our newsletter.</p>
        <div>
          <input placeholder='Enter your email address here' className='singleBlock16input11_1'></input>
          <button className='singleBlock16knopka11_1'>Subscribe</button>
        </div>
        <div className='singleBlock16galka11'>
          <input type='checkbox' className='singleBlock16galka11_1'></input>
          <p className='singleBlock16textGalka11_1'>By signing up, I agree to the privacy policy of Veloretti.</p>
        </div>
        <div className='singleBlock16photo11'>
          <img src={facebook} className='singleBlock16facebook'></img>
          <img src={instagram} className='singleBlock16instagram'></img>
          <img src={youtube} className='singleBlock16youtube'></img>
          <img src={integrall} className='singleBlock16integrall'></img>
          <img src={tiktok} className='singleBlock16tiktok'></img>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Block16Component
