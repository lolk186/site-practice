import React from 'react'
import flag from '../../foto/fotoCities/Блок1/Великобритания_1блок.png';
import person from '../../foto/fotoCities/Блок1/person.png';
import bag from '../../foto/fotoCities/Блок1/Bag.png';
import style1 from '../../styles/stylesCities/style1.css';

function Block1Component() {
  return (
    <div className='citiesBlock1ownHeader1'>
    <div className='citiesBlock1header1'>
        <p className='citiesBlock1valoretti1'>V E L O R E T T I</p>
        <select className='citiesBlock1electric1'>
            <option>ELECTRIC</option>
        </select>
        <select className='citiesBlock1city1'>
            <option>CITY</option>
        </select>
        <select className='citiesBlock1kids1'>
            <option>KIDS</option>
        </select>
        <p className='citiesBlock1accessories1'>ACCESSORIOES</p>
        <p className='citiesBlock1stories1'>STORIES</p>
        <select className='citiesBlock1leasing1'>
            <option>LEASING</option>
        </select>
    </div>
    <div className='citiesBlock1lightHeader1'>
        <p className='citiesBlock1en1'>EN</p>
        <img src={flag} className='citiesBlock1britain1'></img>
        <img src={person} className='citiesBlock1person1'></img>
        <img src={bag} className='citiesBlock1bag1'></img>
    </div>
  </div> 
  )
}

export default Block1Component