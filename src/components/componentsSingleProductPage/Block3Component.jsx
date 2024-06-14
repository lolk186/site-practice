import React from 'react'
import pot3 from '../../foto/fotoSingleProductPage/Блок3/pot3.png';
import style3 from '../../styles/stylesSingleProductPage/style3.css';

function Block3Component() {
  return (
    <div>
        <img src={pot3} className='singleBlock3img1'></img>
        <div className='singleBlock3div1'>
            <p className='singleBlock3div1p1'>Removable long-<br></br>range battery</p>
            <p className='singleBlock3div1p2'>Recharge anytime, anywhere. Our in-house developed battery is<br></br>built to go the distance. With a powerful 540 Wh and an impressive<br></br>range of up to 120km, you'll have the freedom to explore without<br></br>worrying about running out of power. And if you do need to<br></br>recharge, our removable and smart battery pack can be easily<br></br>detached and charged with any electrical outlet.</p>
        </div>
    </div>
  )
}

export default Block3Component
