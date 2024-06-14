import React from 'react'

import flag from '../../foto/fotoSingleProductPage/Блок1/Великобритания_1блок.png';
import person from '../../foto/fotoSingleProductPage/Блок1/person.png';
import bag from '../../foto/fotoSingleProductPage/Блок1/Bag.png';
import style1 from '../../styles/stylesSingleProductPage/style1.css';

function Block1Component() {
  return (
    <div className='ownHeader1'>
    <div className='header1'>
        <p className='valoretti1'>V E L O R E T T I</p>
        <select className='electric1'>
            <option>ELECTRIC</option>
        </select>
        <select className='city1'>
            <option>CITY</option>
        </select>
        <select className='kids1'>
            <option>KIDS</option>
        </select>
        <p className='accessories1'>ACCESSORIOES</p>
        <p className='stories1'>STORIES</p>
        <select className='leasing1'>
            <option>LEASING</option>
        </select>
    </div>
    <div className='lightHeader1'>
        <p className='en1'>EN</p>
        <img src={flag} className='britain1'></img>
        <img src={person} className='person1'></img>
        <img src={bag} className='bag1'></img>
    </div>
  </div> 
  )
}

export default Block1Component
