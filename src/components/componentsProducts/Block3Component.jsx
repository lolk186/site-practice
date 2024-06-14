import React from 'react'
import Rectangle31 from '../../foto/fotoProducts/Блок3/1фото/Rectangle31.png';
import strelkaleft31 from '../../foto/fotoProducts/Блок3/1фото/strelkaleft31.png';
import drandulet31 from '../../foto/fotoProducts/Блок3/1фото/drandulet31.png';
import strelkaright31 from '../../foto/fotoProducts/Блок3/1фото/strelkaright31.png';
import black31 from '../../foto/fotoProducts/Блок3/1фото/black31.png';
import gray31 from '../../foto/fotoProducts/Блок3/1фото/gray31.png';
import sand31 from '../../foto/fotoProducts/Блок3/1фото/sand31.png';
import sandBlack31 from '../../foto/fotoProducts/Блок3/1фото/sandBlack31.png';

import Rectangle32 from '../../foto/fotoProducts/Блок3/2фото/Rectangle32.png';
import strelkaleft32 from '../../foto/fotoProducts/Блок3/2фото/strelkaleft32.png';
import drandulet32 from '../../foto/fotoProducts/Блок3/2фото/drandulet32.png';
import strelkaright32 from '../../foto/fotoProducts/Блок3/2фото/strelkaright32.png';
import black32 from '../../foto/fotoProducts/Блок3/2фото/black32.png';
import gray32 from '../../foto/fotoProducts/Блок3/2фото/gray32.png';
import sand32 from '../../foto/fotoProducts/Блок3/2фото/sand32.png';
import sandWhite32 from '../../foto/fotoProducts/Блок3/2фото/sandWhite32.png';

import style3 from '../../styles/stylesProducts/style3.css';

function Block3Component() {
  return (
    <div className='productsBlock3'>
        <div className='productsBlock3photo1'>
            <img src={Rectangle31} className='productsBlock3photo1img1'></img>
            <div className='productsBlock3photo1all'> 
                <div className='productsBlock3photo1div1'>
                    <p className='productsBlock3photo1div1p1'>Electric Ace</p>
                    <p className='productsBlock3photo1div1p2'>Two</p>
                </div>
                <p className='productsBlock3photo1p1'>Rider height: 173-200cm</p>
                <div className='productsBlock3photo1div2'>
                    <img src={strelkaleft31} className='productsBlock3photo1div2img1'></img>
                    <img src={drandulet31} className='productsBlock3photo1div2img2'></img>
                    <img src={strelkaright31} className='productsBlock3photo1div2img3'></img>
                </div>
                <div className='productsBlock3photo1div3'>
                    <button className='productsBlock3photo1div3button1'>Buy Now</button>
                    <p className='productsBlock3photo1div3p1'>Learn more</p>
                    <img src={black31} className='productsBlock3photo1div3img1'></img>
                    <img src={gray31} className='productsBlock3photo1div3img2'></img>
                    <img src={sand31} className='productsBlock3photo1div3img3'></img>
                    <img src={sandBlack31} className='productsBlock3photo1div3img4'></img>
                </div>
            </div>
        </div>
        <div className='productsBlock3photo2'>
            <img src={Rectangle32} className='productsBlock3photo2img1'></img>
            <div className='productsBlock3photo2all'> 
                <div className='productsBlock3photo2div1'>
                    <p className='productsBlock3photo2div1p1'>Electric Ivy</p>
                    <p className='productsBlock3photo2div1p2'>Two</p>
                </div>
                <p className='productsBlock3photo2p1'>Rider height: 164-184cm</p>
                <div className='productsBlock3photo2div2'>
                    <img src={strelkaleft32} className='productsBlock3photo2div2img1'></img>
                    <img src={drandulet32} className='productsBlock3photo2div2img2'></img>
                    <img src={strelkaright32} className='productsBlock3photo2div2img3'></img>
                </div>
                <div className='productsBlock3photo2div3'>
                    <button className='productsBlock3photo2div3button1'>Buy Now</button>
                    <p className='productsBlock3photo2div3p1'>Learn more</p>
                    <img src={black32} className='productsBlock3photo2div3img1'></img>
                    <img src={gray32} className='productsBlock3photo2div3img2'></img>
                    <img src={sand32} className='productsBlock3photo2div3img3'></img>
                    <img src={sandWhite32} className='productsBlock3photo2div3img4'></img>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Block3Component