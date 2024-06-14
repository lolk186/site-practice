import React from 'react'
import velik6 from '../../foto/fotoAboutUs/Блок6/velik6.png';
import style6 from '../../styles/stylesAboutUs/style6.css';

function Block6Component() {
  return (
    <div className='aboutBlock6'>
      <img src={velik6} className='aboutBlock6img1'></img>
      <div className='aboutBlock6div1'>
        <p className='aboutBlock6div1p1'>Made for you</p>
        <p className='aboutBlock6div1p2'>Elevate your ride with a bicycle that mirrors<br></br>your unique style and personality. From an<br></br>Ace Two electric bike with the latest<br></br>technology packed into a minimalist design,<br></br>or a bright yellow Berlin for those who like to<br></br>ride light and have a craving for nostalgia.<br></br>Our diverse range of models and colours<br></br>cater to riders of all kinds.</p>
      </div>
    </div>
  )
}

export default Block6Component