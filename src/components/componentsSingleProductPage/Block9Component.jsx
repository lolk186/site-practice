import React from 'react'
import style9 from '../../styles/stylesSingleProductPage/style9.css'
import povareshka9 from '../../foto/fotoSingleProductPage/Блок9/povareshka9.png'

function Block9Component() {
  return (
    <div className='singleBlock9'>
        <div className='singleBlock9div1'>
            <p className='singleBlock9div1p1'>Ivy Two</p>
            <p className='singleBlock9div1p2'>Introducing the Ivy Two, the electric bike that takes your<br></br>daily commute to the next level. With an accessible<br></br>lower frame, the latest technology, and safety features,<br></br>the Ivy delivers instant power, convenience, and peace<br></br>of mind at every turn, making it the go-to bike for any<br></br>commute. Equipped with a bright LED brake light for<br></br>enhanced visibility and safety tracking for added<br></br>security, the Ivy Two is the perfect combination of<br></br>design, technology, and safety.</p>
        </div>
        <img src={povareshka9} className='singleBlock9img1'></img>
    </div>
  )
}

export default Block9Component
