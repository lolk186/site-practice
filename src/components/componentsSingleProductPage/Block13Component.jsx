import React from 'react'
import circle13 from '../../foto/fotoSingleProductPage/Блок13/circle13.png';
import car13 from '../../foto/fotoSingleProductPage/Блок13/car13.png';
import style13 from '../../styles/stylesSingleProductPage/style13.css';

function Block13Component() {
  return (
    <div className='singleBlock13'>
      <div className='singleBlock13divmargin'>
        <div className='singleBlock13div1'>
          <img src={car13} className='singleBlock13img1'></img>
        </div>
        <img src={circle13} className='singleBlock13img2'></img>
      </div>
      <button className='singleBlock13button1'>+</button>
      <button className='singleBlock13button2'>+</button>
      <button className='singleBlock13button3'>+</button>
      <button className='singleBlock13button4'>+</button>
      <button className='singleBlock13button5'>+</button>
      <button className='singleBlock13button6'>+</button>
      <button className='singleBlock13button7'>+</button>
      <button className='singleBlock13button8'>+</button>
      <button className='singleBlock13button9'>+</button>
    </div>
  )
}

export default Block13Component
