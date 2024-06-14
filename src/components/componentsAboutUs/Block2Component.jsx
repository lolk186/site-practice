import React from 'react'
import about2  from '../../foto/fotoAboutUs/Блок2/about2.png';
import style2 from '../../styles/stylesAboutUs/style2.css';

function Block2Component() {
  return (
    <div className='aboutBlock2'>
      <img src={about2} className='aboutBlock2img1'></img>
      <div className='aboutBlock2div1'>
        <p className='aboutBlock2div1p1'>VELORETTI</p>
        <p className='aboutBlock2div1p2'>About us</p>
        <p className='aboutBlock2div1p3'>Forever Forward.</p>
      </div>
    </div>
  )
}

export default Block2Component