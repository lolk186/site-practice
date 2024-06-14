import React from 'react'
import knife8 from '../../foto/fotoSingleProductPage/Блок8/knife8.png';
import style8 from '../../styles/stylesSingleProductPage/style8.css';

function Block8Component() {
  return (
    <div className='singleBlock8'>
        <img src={knife8} className='singleBlock8img1'></img>
        <div className='singleBlock8div1'>
            <p className='singleBlock8div1p1'>Silent and<br></br>powerful mid-<br></br>motor</p>
            <p className='singleBlock8div1p2'>Natural and powerful. The 65Nm torque mid-engine<br></br>gives you all the power you need. Because the engine is<br></br>directly connected to your pedals, it automatically<br></br>adjusts its power to your torque instead of speed. This<br></br>gives you the most natural electric biking experience<br></br>there is.</p>
        </div>
    </div>
  )
}

export default Block8Component
