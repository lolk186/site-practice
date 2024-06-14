import React from 'react'
import tormoza12 from '../../foto/fotoSingleProductPage/Блок12/tormoza12.png';
import style12 from '../../styles/stylesSingleProductPage/style12.css';

function Block12Component() {
  return (
    <div className='singleBlock12'>
        <div className='singleBlock12div1'>
            <p className='singleBlock12div1p1'>Shimano®<br></br>hydraulic<br></br>discbrakes</p>
            <p className='singleBlock12div1p2'>The Shimano® discbrakes are premium hydraulic disc brakes<br></br>designed to deliver lightning-fast stopping power, so you can ride<br></br>with complete confidence and control. Rest assured, you'll feel the<br></br>difference in the moments you need it most.</p>
        </div>
    <img src={tormoza12} className='singleBlock12img1'></img>
    </div>

  )
}

export default Block12Component
