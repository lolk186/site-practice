import React from 'react'
import velik3 from '../../foto/fotoAboutUs/Блок3/velik3.png';
import style3 from '../../styles/stylesAboutUs/style3.css';

function Block3Component() {
  return (
    <div className='aboutBlock3'>
      <img src={velik3} className='aboutBlock3img1'></img>
      <div className='aboutBlock3div1'>
        <p className='aboutBlock3div1p1'>Forever forward</p>
        <p className='aboutBlock3div1p2'>Our bikes are made to stand the test of time, both aesthetically and<br></br>practically. Whether you’re after a state-of-the-art electric bike, a<br></br>classic city bike, or a kids bike for the school run, we want to help<br></br>make your commute the best part of your day. </p>
      </div>
    </div>
  )
}

export default Block3Component