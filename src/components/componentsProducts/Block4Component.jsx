import React from 'react'
import img41 from '../../foto/fotoProducts/Блок4/img41.png';
import img42 from '../../foto/fotoProducts/Блок4/img42.png';
import img43 from '../../foto/fotoProducts/Блок4/img43.png';
import Rectangle4 from '../../foto/fotoProducts/Блок4/Rectangle4.png';
import strelkaleft4 from '../../foto/fotoProducts/Блок4/strelkaleft.png'
import strelkaright4 from '../../foto/fotoProducts/Блок4/strelkaright.png'

import style4 from '../../styles/stylesProducts/style4.css'

function Block4Component() {
  return (
    <div>
      <div className='productsBlock4strelki'>
        <p className='productsBlock4p1'>Explore our bikes</p>
        <img src={strelkaleft4} className='productsBlock4strelkaleft'></img>
        <img src={strelkaright4} className='productsBlock4strelkaright'></img>
      </div>
      <div className='productsBlock4Big'>
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
        <div className='productsBlock4all3'>
          <div>
            <img src={Rectangle4} className='productsBlock4photo3img'></img>
            <div className='productsBlock4photo3all'>
              <div className='productsBlock4photo3div1'>
                <p className='productsBlock4photo3div1p1'>Accessories</p>
              </div>
              <div className='productsBlock4photo3div2'>
                <p className='productsBlock4photo3div2p1'>Discover</p>
              </div>
              <img src={img43} className='productsBlock4photo3img2'></img>
              <div className='productsBlock4photo3div3'>
                <button className='productsBlock4photo3div3button1'>Buy Now</button>
                <p className='productsBlock4photo3div3p1'>Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block4Component