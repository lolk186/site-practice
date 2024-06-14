import React from 'react'
import veloretti3 from '../../foto/fotoCities/Блок3/veloretti3.png';
import women3 from '../../foto/fotoCities/Блок3/women3.png';
import style3 from '../../styles/stylesCities/style3.css';

function Block3Component() {
  return (
    <div className='citiesBlock3'>
      <p className='citiesBlock3p1'>Forever Forward.</p>
      <div className='citiesBlock3div1'>
        <div className='citiesBlock3div1imgs'>
          <img src={veloretti3} className='citiesBlock3div1img1'></img>
          <img src={women3} className='citiesBlock3div1img2'></img>
        </div>
        <div className='citiesBlock3div1div1'>
          <p className='citiesBlock3div1div1p1'>Our women's bicycles are<br></br>for everyone who likes to<br></br>combine style with<br></br>performance. In this<br></br>range, available are the<br></br>Café Racer and the<br></br>Robyn, both frames with a<br></br>lower tube, making it easy<br></br>to step through.</p>
        </div>
      </div>
    </div>
  )
}

export default Block3Component