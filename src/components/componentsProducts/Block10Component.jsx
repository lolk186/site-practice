import React from 'react'
import bicykel10 from '../../foto/fotoProducts/Блок10/bicykel10.png';
import style10 from '../../styles/stylesProducts/style10.css';


function Block10Component() {
  return (
    <div className='productsBlock10all'>
        <div className='productsBlock10div1'>
            <p className='productsBlock10div1p1'>Ride carefree</p>
            <p className='productsBlock10div1p2'>Our Qover x Veloretti insurance plan has got you covered. It offers<br></br>comprehensive coverage against theft, provides assistance in case<br></br>of any issues, and covers any damages to your bike.</p>
            <p className='productsBlock10div1p3'>Learn more</p>
        </div>
        <img src={bicykel10} className='productsBlock10img1'></img>
  </div>
  )
}

export default Block10Component
