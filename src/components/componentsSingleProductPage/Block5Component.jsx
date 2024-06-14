import React from 'react'
import pedal5 from '../../foto/fotoSingleProductPage/Блок5/pedal5.png';
import style5 from '../../styles/stylesSingleProductPage/style5.css';

function Block5Component() {
  return (
    <div className='singleBlock5'>
        <img src={pedal5} className='singleBlock5img1'></img>
        <div className='singleBlock5div1'>
            <p className='singleBlock5div1p1'>Silent and<br></br>powerful mid-<br></br>motor</p>
            <p className='singleBlock5div1p2'>Natural and powerful. The 65Nm torque mid-engine<br></br>gives you all the power you need. Because the engine is<br></br>directly connected to your pedals, it automatically<br></br>adjusts its power to your torque instead of speed. This<br></br>gives you the most natural electric biking experience<br></br>there is.</p>
        </div>
    </div>
  )
}

export default Block5Component
