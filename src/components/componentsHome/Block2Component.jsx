import React from 'react'
import style2 from '../../styles/stylesHome/style2.css'
import bike from '../../foto/fotoHome/Блок2/bike.png'

function Block2Component() {
  return (
    <div>
        <div className='block2'>
            <img  className='bike2'src={bike}></img>
            <p className='business2'>VELLORETTI BUSINESS</p>
            <p className='lease2'>Bike Lease Plan For Employees.</p>
        </div>
    </div>
  )
}

export default Block2Component
