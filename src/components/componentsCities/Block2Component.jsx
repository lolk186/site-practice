import React from 'react'
import hero2 from '../../foto/fotoCities/Блок2/hero2.png';
import style2 from '../../styles/stylesCities/style2.css';

function Block2Component() {
  return (
    <div className='citiesBlock2'>
      <img src={hero2} className='citiesBlock2img1'></img>
      <div className='citiesBlock2div1'>
        <p className='citiesBlock2div1p1'>VELORETTI</p>
        <p className='citiesBlock2div1p2'>City bikes</p>
        <p className='citiesBlock2div1p3'>Forever Forward .</p>
      </div>
    </div>
  )
}

export default Block2Component