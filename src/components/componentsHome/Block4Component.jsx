import React from 'react'
import bice from '../../foto/fotoHome/Блок4/becycle.png';
import style4 from '../../styles/stylesHome/style4.css';

function Block4Component() {
  return (
        <div className='block4'>
            <img src={bice} className='bice'></img>
            <div className='text4'>
                <p className='service'>Service,<br></br>maintenance and<br></br>insurance</p>
                <p className='include'>The lease includes an all-in service package.<br></br>Throughout the entire 36 months, you are<br></br>fully insured against damage, theft and<br></br>maintenance. In addition, you always have<br></br>access to roadside assistance. </p>
            </div>
        </div>
  )
}

export default Block4Component
