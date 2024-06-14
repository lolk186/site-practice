import React from 'react'
import style8 from '../../styles/stylesHome/style8.css';

function Block8Component() {
  return (
    <div className='all8'>
        <p className='text8'>Get in touch</p>
        <input placeholder='First name' className='first8'></input>
        <input placeholder='Last name' className='last8'></input>
        <input placeholder='Email address' className='email8'></input>
        <input placeholder='Phone number' className='phone8'></input>
        <input placeholder='Company name' className='company8'></input>
        <select className='vybor8'>
            <option>Company Size</option>
        </select>
        <input placeholder='Number of bikes' className='number8'></input>
        <textarea placeholder='How can we help' className='how8' multiple></textarea>
        <button className='knopka8'>Send the request</button>
    </div>
  )
}

export default Block8Component
