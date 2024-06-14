import React from 'react'
import scuter from '../../foto/fotoAboutUs/Блок4/scuter.png';
import style4 from '../../styles/stylesAboutUs/style4.css';

function Block4Component() {
  return (
    <div className='aboutBlock4'>
      <div className='aboutBlock4div1'>
        <p className='aboutBlock4div1p1'>Part of Pon.Bike</p>
        <p className='aboutBlock4div1p2'>Veloretti was founded in Amsterdam in 2012 with a mission to make<br></br>clean, timeless bikes that are great quality and delivered to your<br></br>door at a fair price. We are proud to now be part of Pon.Bike, the<br></br>world-leading family of bike brands. With this support, we can<br></br>continue to evolve our designs, take care of our riders, and help<br></br>keep their bikes on the road.</p>
      </div>
      <img src={scuter} className='aboutBlock4img1'></img>
    </div>
  )
}

export default Block4Component