import React from 'react'
import flag from '../../foto/fotoAboutUs/Блок1/Великобритания_1блок.png';
import person from '../../foto/fotoAboutUs/Блок1/person.png';
import bag from '../../foto/fotoAboutUs/Блок1/Bag.png';
import style1 from '../../styles/stylesAboutUs/style1.css';

function Block1Component() {
  return (
<div className='aboutBlock1ownHeader1'>
    <div className='aboutBlock1header1'>
        <p className='aboutBlock1valoretti1'>V E L O R E T T I</p>
        <select className='aboutBlock1electric1'>
            <option>ELECTRIC</option>
        </select>
        <select className='aboutBlock1city1'>
            <option>CITY</option>
        </select>
        <select className='aboutBlock1kids1'>
            <option>KIDS</option>
        </select>
        <p className='aboutBlock1accessories1'>ACCESSORIOES</p>
        <p className='aboutBlock1stories1'>STORIES</p>
        <select className='aboutBlock1leasing1'>
            <option>LEASING</option>
        </select>
    </div>
    <div className='aboutBlock1lightHeader1'>
        <p className='aboutBlock1en1'>EN</p>
        <img src={flag} className='aboutBlock1britain1'></img>
        <img src={person} className='aboutBlock1person1'></img>
        <img src={bag} className='aboutBlock1bag1'></img>
    </div>
  </div> 
  )
}

export default Block1Component