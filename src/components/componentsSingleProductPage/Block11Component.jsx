import React from 'react'
import breckets11 from '../../foto/fotoSingleProductPage/Блок11/breckets11.png';
import style11 from '../../styles/stylesSingleProductPage/style11.css';

function Block11Component() {
  return (
    <div className='singleBlock11'>
      <img src={breckets11} className='singleBlock11img1'></img>
      <div className='singleBlock11div1'>
        <p className='singleBlock11div1p1'>Safety tracking</p>
        <p className='singleBlock11div1p2'>The Electric Two comes with safety tracking. In case you find<br></br>yourself in an uncertain situation, simply press the button on your<br></br>handlebar to alert your loved ones of your live location and feel<br></br>more secure.</p>
        <p className='singleBlock11div1p3'>Whether you're commuting in the city or exploring the countryside,<br></br>you can have peace of mind knowing that notifying is just a button<br></br>press away. Moreover, the tracking feature automatically<br></br>deactivates after an hour, allowing you to enjoy your rides with<br></br>complete privacy and security.</p>
      </div>
    </div>
  )
}

export default Block11Component
