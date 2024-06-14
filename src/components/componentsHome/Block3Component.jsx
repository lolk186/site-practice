import React from 'react'
import man from '../../foto/fotoHome/Блок3/man.png'
import style3 from '../../styles/stylesHome/style3.css' 
function Block3Component() {
  return (
    <div className='block3'>
        <img src={man} className='man'></img>
        <div className='lightBlock3'>
            <p className='plans'>Bike plans for<br></br> employees.</p>
            <p className='electrics'>Veloretti Electrics benefit both the environment and the health of<br></br>your employees. Oh, and they look good too. Cost-free for the<br></br>employer and outside of the WKR.</p>
            <p className='discover'>Discover More</p>
        </div>
    </div>
  )
}

export default Block3Component
