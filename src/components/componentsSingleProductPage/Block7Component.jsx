import React from 'react'
import fork7 from '../../foto/fotoSingleProductPage/Блок7/fork7.png';
import style7 from '../../styles/stylesSingleProductPage/style7.css';

function Block7Component() {
  return (
    <div className='singleBlock7'>
        <div className='singleBlock7div1'>
            <p className='singleBlock7div1p1'>Enviolo®<br></br>automated<br></br>gears</p>
            <p className='singleBlock7div1p2'>Never think about shifting gears again. The Enviolo®<br></br>gear system takes automated gear-shifting to the next<br></br>level, delivering the ultimate ride experience every time.<br></br>This advanced technology effortlessly shifts gears to<br></br>optimize performance, delivering a natural and<br></br>effortless ride. Say goodbye to clunky gear changes<br></br>and hello to a ride that's both easy and efficient.</p>
        </div>
        <img src={fork7} className='singleBlock7img1'></img>
    </div>
  )
}

export default Block7Component
