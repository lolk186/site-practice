import React from 'react'
import veliki41 from '../../foto/fotoCities/Блок4/veliki41.png';
import veliki42 from '../../foto/fotoCities/Блок4/veliki42.png';
import veliki43 from '../../foto/fotoCities/Блок4/veliki43.png';
import style4 from '../../styles/stylesCities/style4.css';

function Block4Component() {
  return (
<div className='citiesBlock4'>
      <div className='citiesBlock4div1'>
        <img src={veliki41} className='citiesBlock4div1img1'></img>
        <div className='citiesBlock4div1div1'>
          <p className='citiesBlock4div1div1p1'>Caféracer</p>
          <p className='citiesBlock4div1div1p2'>Women</p>
        </div>
      </div>
      <div className='citiesBlock4div2'>
        <img src={veliki42} className='citiesBlock4div2img1'></img>
        <div className='citiesBlock4div2div1'>
          <p className='citiesBlock4div2div1p1'>Robyn</p>
          <p className='citiesBlock4div2div1p2'>Women</p>
        </div>
      </div>
      <div className='citiesBlock4div3'>
        <img src={veliki43} className='citiesBlock4div3img1'></img>
        <div className='citiesBlock4div3div1'>
          <p className='citiesBlock4div3div1p1'>Caféracer</p>
          <p className='citiesBlock4div3div1p2'>Women</p>
        </div>
      </div>
    </div>
  )
}

export default Block4Component