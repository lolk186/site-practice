import React from 'react'
import style10 from '../../styles/stylesSingleProductPage/style10.css';
import wrapper10 from '../../foto/fotoSingleProductPage/Блок10/wrapper10.png';

function Block10Component() {
  return (
    <div className='singleBlock10'>
        <img src={wrapper10} className='singleBlock10img1'></img>
        <div className='singleBlock10div1'>
            <p  className='singleBlock10div1p1'>Osram®<br></br>precision light</p>
            <p  className='singleBlock10div1p2'>Safety is fundamental when it comes to<br></br>biking. We've designed the precision front<br></br>light with precision and clarity in mind. From<br></br>dark roads to challenging city terrain, the<br></br>precision front light, with its strong beam, is<br></br>designed to help you navigate with ease and<br></br>safety. No matter the environment, we make<br></br>sure we provide you with the visibility you<br></br>need.</p>
        </div>
    </div>
  )
}

export default Block10Component
