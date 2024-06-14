import React from 'react'
import spoon6 from '../../foto/fotoSingleProductPage/Блок6/spoon6.png';
import style6 from '../../styles/stylesSingleProductPage/style6.css';

function Block6Component() {
  return (
    <div className='singleBlock6'>
        <img src={spoon6} className='singleBlock6img1'></img>
        <div className='singleBlock6div1'>
            <p className='singleBlock6div1p1'>Built-in display</p>
            <p className='singleBlock6div1p2'>Discover a new level of convenience and<br></br>control with our elegantly designed<br></br>integrated display. Everything you need to<br></br>manage your ride is right at your fingertips,<br></br>from customizing your bike's settings to<br></br>navigating unfamiliar parts of the city. And<br></br>with seamless integration to our app, you can<br></br>access all your data and ride information with<br></br>ease.</p>
        </div>
    </div>
  )
}

export default Block6Component
