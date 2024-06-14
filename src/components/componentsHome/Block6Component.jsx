import React from 'react'
import style6 from '../../styles/stylesHome/style6.css';
import before6 from '../../foto/fotoHome/Блок6/before6.png'
import velik from '../../foto/fotoHome/Блок6/velik.png'


function Block6Component() {
  return (
    <div className='block6'>
        <div className='bigSpan'>
            <p className='textBig'>How it works</p>
            <div className='span1'>
                <img src={before6} className='rectangle6'></img>
                <p className='textRec6'>Register your company</p>
            </div>
            <p className='textGray6'>Fill in our registration form with your company details. After<br></br>your registration, our leasing partner will do a credit check. You<br></br>will hear whether your application has been approved within 24<br></br>hours.</p>
            <div className='span2'>
                <img src={before6} className='rectangle6'></img>
                <p className='textRec6'>Determine the requirements</p>
            </div>
            <p className='textGray6'>You get acces to the digital platform. Set the requirements for<br></br>your employees and share the registration link.</p>
            <div className='span3'>
                <img src={before6} className='rectangle6'></img>
                <p className='textRec6'>Ride your bike!</p>
            </div>
            <p className='textGray6'>Let's go! Your employees can choose their bikes and they'll be<br></br>delivered straight to their homes.</p>
            <div className='span4'>
                <img src={before6} className='rectangle6'></img>
                <p className='textRec6'>Administration</p>
            </div>
            <p className='textGray6'>Everything in one place. The digital platform gives you an easy<br></br>overview of all the information for your payroll.</p>
            </div>
        <img src={velik} className='pishechka'></img>
  </div>
  )
}

export default Block6Component
