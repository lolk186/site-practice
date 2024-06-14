import React from 'react'
import baba4 from '../../foto/fotoSingleProductPage/Блок4/baba4.png';
import style4 from '../../styles/stylesSingleProductPage/style4.css';

function Block4Component() {
  return (
    <div className='singleBlock4'>
        <div className='singleBlock4div1'>
            <p className='singleBlock4div1p1'>Ivy Two</p>
            <p className='singleBlock4div1p2'>Introducing the Ivy Two, the electric bike that takes your<br></br>daily commute to the next level. With an accessible<br></br>lower frame, the latest technology, and safety features,<br></br>the Ivy delivers instant power, convenience, and peace<br></br>of mind at every turn, making it the go-to bike for any<br></br>commute. Equipped with a bright LED brake light for<br></br>enhanced visibility and safety tracking for added<br></br>security, the Ivy Two is the perfect combination of<br></br>design, technology, and safety.</p>
        </div>
        <img src={baba4} className='singleBlock4img1'></img>
  </div>
  )
}

export default Block4Component
