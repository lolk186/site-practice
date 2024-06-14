import React from 'react'
import style11 from '../../styles/stylesHome/style11.css';
import facebook from '../../foto/fotoHome/Блок11/facebook.png';
import instagram from '../../foto/fotoHome/Блок11/instagram.png';
import youtube from '../../foto/fotoHome/Блок11/youtube.png';
import integrall from '../../foto/fotoHome/Блок11/integrall.png';
import tiktok from '../../foto/fotoHome/Блок11/tiktok.png';

function Block11Component() {
  return (
    <div className='zvet11'>
      <button className='knopkaVverch'>↑</button>
      <div className='all11'>
        <div className='big1_11'>
          <p className='text1_11'>Explorer</p>
          <div className='span1_11'>
            <p className='textSpan1_11'>Electric bikes</p>
            <p className='textSpan1_11'>City bikes</p>
            <p className='textSpan1_11'>Kids' bikes</p>
            <p className='textSpan1_11'>Accessories</p>
            <p className='textSpan1_11'>Outlet</p>
            <p className='textSpan1_11'>Business</p>
            <p className='textSpan1_11'>Insurance Electric</p>
            <p className='textSpan1_11'>Size guide</p>
          </div>
        </div>
        <div className='big2_11'>
          <p className='text2_11'>About</p>
          <div className='span2_11'>
            <p className='textSpan2_11'>About us</p>
            <p className='textSpan2_11'>Journal</p>
            <p className='textSpan2_11'>Reviews</p>
            <p className='textSpan2_11'>Press</p>
            <p className='textSpan2_11'>Jobs</p>
          </div>
        </div>
        <div className='big3_11'>
          <p className='text3_11'>Help</p>
          <div className='span3_11'>
            <p className='textSpan3_11'>Contact</p>
            <p className='textSpan3_11'>FAQ</p>
            <p className='textSpan3_11'>Delivery</p>
            <p className='textSpan3_11'>Assembly & manuals</p>
            <p className='textSpan3_11'>Payment options</p>
            <p className='textSpan3_11'>Privacy policy</p>
            <p className='textSpan3_11'>Terms & conditions</p>
          </div>
        </div>
        <div className='spanEnd11'>
          <p className='textOther1'>Join the ride.</p>
          <p className='textOther2'>Sign up for our newsletter.</p>
          <div>
            <input placeholder='Enter your email address here' className='input11_1'></input>
            <button className='knopka11_1'>Subscribe</button>
          </div>
          <div className='galka11'>
            <input type='checkbox' className='galka11_1'></input>
            <p className='textGalka11_1'>By signing up, I agree to the privacy policy of Veloretti.</p>
          </div>
          <div className='photo11'>
            <img src={facebook} className='facebook'></img>
            <img src={instagram} className='instagram'></img>
            <img src={youtube} className='youtube'></img>
            <img src={integrall} className='integrall'></img>
            <img src={tiktok} className='tiktok'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block11Component