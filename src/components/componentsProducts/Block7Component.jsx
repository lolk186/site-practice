import React from 'react'
import scuter7 from '../../foto/fotoProducts/Блок7/scuter7.png';
import style7 from '../../styles/stylesProducts/style7.css';

function Block7Component() {
  return (
    <div className='productsBlock7'>
        <img src={scuter7} className='productsBlock7scuter7'></img>
        <div className='productsBlock7text5'>
            <p className='productsBlock7p1'>Leasing</p>
            <p className='productsBlock7p2'>Want to provide your organisation with mobility in a unique and<br></br>creative way? Our Electric and City bikes are the perfect solution for<br></br>healthier employees. So whether it's customised employee bicycles<br></br>or standout promotional rides, both small and big organisations<br></br>share the love of our Veloretti designs. Depending on the number of<br></br>bikes, we will give you a customised quote.</p>
            <p className='productsBlock7p3'>Learn more</p>
        </div>
    </div>
  )
}

export default Block7Component