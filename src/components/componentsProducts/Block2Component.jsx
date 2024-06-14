import React from 'react'
import bicycle from '../../foto/fotoProducts/Блок2/Bicycle.png'

import style2 from '../../styles/stylesProducts/style2.css'

function Block2Component() {
  return (
    <div className='productsBlock2All'>
        <img  className='productsBlock2img1'src={bicycle}></img>
        <p className='productsBlock2p1'>VELLORETTI ELECTRIC</p>
        <p className='productsBlock2p2'>This Is Two.</p>
        <p className='productsBlock2p3'>Introducing the all-new Ivy and Ace</p>
    </div>
  )
}

export default Block2Component