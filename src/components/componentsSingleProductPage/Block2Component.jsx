import React from 'react'

import blackButton2 from '../../foto/fotoSingleProductPage/Блок2/blackButton2.png';
import chashka2 from '../../foto/fotoSingleProductPage/Блок2/chashka2.png';
import grayButton2 from '../../foto/fotoSingleProductPage/Блок2/grayButton2.png';
import kastrula21 from '../../foto/fotoSingleProductPage/Блок2/kastrula21.png';
import kastrula22 from '../../foto/fotoSingleProductPage/Блок2/kastrula22.png';
import klarna2 from '../../foto/fotoSingleProductPage/Блок2/klarna2.png';
import sandButton2 from '../../foto/fotoSingleProductPage/Блок2/sandButton2.png';
import sandWhiteButton2 from '../../foto/fotoSingleProductPage/Блок2/sandWhiteButton2.png';
import strelkaLeft2 from '../../foto/fotoSingleProductPage/Блок2/strelkaLeft2.png';
import strelkaRight2 from '../../foto/fotoSingleProductPage/Блок2/strelkaRight2.png';
import tochka12 from '../../foto/fotoSingleProductPage/Блок2/tochka12.png';
import tochka22 from '../../foto/fotoSingleProductPage/Блок2/tochka22.png';
import tochka32 from '../../foto/fotoSingleProductPage/Блок2/tochka32.png';
import Rectangle2 from '../../foto/fotoSingleProductPage/Блок2/Rectangle2.png';

import style2 from '../../styles/stylesSingleProductPage/style2.css';

function Block2Component() {
  return (
    <div>
          <img src={Rectangle2} className='singleBlock2img1'></img>
    <div className='singleBlock2all'>
      <div>
        <img src={Rectangle2} className='singleBlock2div1img1'></img>
        <div className='singleBlock2div1div1'>
          <img src={strelkaLeft2} className='singleBlock2div1div1img1'></img>
          <img src={chashka2} className='singleBlock2div1div1img2'></img>
          <img src={strelkaRight2} className='singleBlock2div1div1img3'></img>
        </div>
        <div className='singleBlock2div1div2'>
          <img src={tochka32} className='singleBlock2div1div2img1'></img>
          <img src={tochka12} className='singleBlock2div1div2img2'></img>
          <img src={tochka22} className='singleBlock2div1div2img3'></img>
        </div>
      </div>
      <div>
        <div className='singleBlock2div3'>
          <p className='singleBlock2div3p1'>Electric Ivy</p>
          <p className='singleBlock2div3p2'>Two</p>
          <p className='singleBlock2div3p3'>V</p>
          <p className='singleBlock2div3p4'>€ 3.299</p>
        </div>
        <div className='singleBlock2div4'>
          <img src={kastrula21} className='singleBlock2div4img1'></img>
          <img src={kastrula22} className='singleBlock2div4img2'></img>
        </div>
        <div className='singleBlock2div5'>
          <p className='singleBlock2div5p1'>Electric Ace</p>
          <p className='singleBlock2div5p2'>Two</p>
          <p className='singleBlock2div5p3'>Electric Ivy</p>
          <p className='singleBlock2div5p4'> Two</p>
        </div>
        <div className='singleBlock2div6'>
          <p className='singleBlock2p1'>Ivy Two Matte Black</p>
          <div className='singleBlock2div7'>
            <img src={blackButton2} className='singleBlock2div7img1'></img>
            <img src={grayButton2} className='singleBlock2div7img2'></img>
            <img src={sandButton2} className='singleBlock2div7img3'></img>
            <img src={sandWhiteButton2} className='singleBlock2div7img4'></img>
          </div>
        </div>
        <div className='singleBlock2div8'>
          <div className='singleBlock2div8div1'>
            <p className='singleBlock2div8p1'>3 interest-free payments with</p>
          </div>
          <img src={klarna2} className='singleBlock2div8img1'></img>
        </div>
        <p className='singleBlock2endp1'>The Ivy Two is a step-through frame electric bike combining design, advanced<br></br>technology, and safety features. Rider height: between 164 and 184cm.</p>
        <select className='singleBlock2endselect1'>
          <option>Scroll to Specifications</option>
        </select>
        <button className='singleBlock2endbutton1'>Customise now</button>
        <div className='singleBlock2endp2div'>
          <p className='singleBlock2endp2'>Shipping to the Netherlands, Belgium & Germany only.</p>
        </div>
        <p className='singleBlock2endp3'>Delivery time: 5-15 business days</p>
      </div>
    </div>
    </div>
  )
}

export default Block2Component
