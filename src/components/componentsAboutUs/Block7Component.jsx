import React from 'react'
import img41 from '../../foto/fotoAboutUs/Блок7/img41.png';
import img42 from '../../foto/fotoAboutUs/Блок7/img42.png';
import img43 from '../../foto/fotoAboutUs/Блок7/img43.png';
import Rectangle4 from '../../foto/fotoAboutUs/Блок7/Rectangle4.png';
import strelkaleft4 from '../../foto/fotoAboutUs/Блок7/strelkaleft.png'
import strelkaright4 from '../../foto/fotoAboutUs/Блок7/strelkaright.png'

import style4 from '../../styles/stylesAboutUs/style7.css'

function Block7Component() {
  return (
    <div>
      <div className='productsBlock4strelki'>
        <p className='productsBlock4p1'>Explore our bikes</p>
        <img src={strelkaleft4} className='productsBlock4strelkaleft'></img>
        <img src={strelkaright4} className='productsBlock4strelkaright'></img>
      </div>
      <div className='productsBlock4Big'>
      <div className='productsBlock4all1q'>
          <div>
            <img src={Rectangle4} className='productsBlock4photo1imgq'></img>
            <div className='productsBlock4photo1allq'>
              <div className='productsBlock4photo1div1q'>
                <p className='productsBlock4photo1div1p1q'>Electric Bikes</p>
                <p className='productsBlock4photo1div1p2q'>From €3.299</p>
              </div>
              <div className='productsBlock4photo1div2q'>
                <p className='productsBlock4photo1div2p1q'>Electric Ivy Two</p>
                <p className='productsBlock4photo1div2p2q'>Electric Ace Two</p>
              </div>
              <img src={img43} className='productsBlock4photo1img2q'></img>
              <div className='productsBlock4photo1div3q'>
                <button className='productsBlock4photo1div3button1q'>Buy Now</button>
                <p className='productsBlock4photo1div3p1q'>Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className='productsBlock4all1'>
          <div>
            <img src={Rectangle4} className='productsBlock4photo1img'></img>
            <div className='productsBlock4photo1all'>
              <div className='productsBlock4photo1div1'>
                <p className='productsBlock4photo1div1p1'>City Bikes</p>
                <p className='productsBlock4photo1div1p2'>From €399</p>
              </div>
              <div className='productsBlock4photo1div2'>
                <p className='productsBlock4photo1div2p1'>Women</p>
                <p className='productsBlock4photo1div2p2'>Men</p>
              </div>
              <img src={img41} className='productsBlock4photo1img2'></img>
              <div className='productsBlock4photo1div3'>
                <button className='productsBlock4photo1div3button1'>Buy Now</button>
                <p className='productsBlock4photo1div3p1'>Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className='productsBlock4all2'>
          <div>
            <img src={Rectangle4} className='productsBlock4photo2img'></img>
            <div className='productsBlock4photo2all'>
              <div className='productsBlock4photo2div1'>
                <p className='productsBlock4photo2div1p1'>Kids' Bikes</p>
                <p className='productsBlock4photo2div1p2'>From €119</p>
              </div>
              <div className='productsBlock4photo2div2'>
                <p className='productsBlock4photo2div2p1'>Ages 1,5 to 8</p>
              </div>
              <img src={img42} className='productsBlock4photo2img2'></img>
              <div className='productsBlock4photo2div3'>
                <button className='productsBlock4photo2div3button1'>Buy Now</button>
                <p className='productsBlock4photo2div3p1'>Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block7Component