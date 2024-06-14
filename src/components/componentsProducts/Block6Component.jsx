import React from 'react'
import img6 from '../../foto/fotoProducts/Блок6/img6.png'
import style6 from '../../styles/stylesProducts/style6.css'

function Block6Component() {
  return (
    <div className='productsBlock6All'>
        <img src={img6} className='productsBlock6img1'></img>
        <div>
            <p className='productsBlock6p1'>Discover your<br></br>local Veloretti<br></br>partner store</p>
            <p className='productsBlock6p2'>Our partner stores across the Netherlands<br></br>are there for you. Whether you're looking to<br></br>pick up a newly ordered bike, need a fix, or<br></br>want to take a test ride on our Ivy or Ace Two,<br></br>your ideal biking experience is closer than<br></br>you think.</p>
            <button className='productsBlock6button'>Find a partner store near you</button>
        </div>
    </div>
  )
}

export default Block6Component