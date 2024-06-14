import React from 'react'
import logo5 from '../../foto/fotoProducts/Блок5/logo5.png'
import style5 from '../../styles/stylesProducts/style5.css'

function Block5Component() {
  return (
    <div className='productsBlock5all'>
        <p className='productsBlock5p1'>Make your commute<br></br>the best part of your day.</p>
        <div className='productsBlock5div1'>
            <p className='productsBlock5p2'>Clean and timeless designs that make every ride a thrill.<br></br>Wherever you're heading, our bikes are made to make your daily<br></br>commute a joy.</p>
            <img src={logo5} className='productsBlock5img'></img>
        </div>
    </div>
  )
}

export default Block5Component