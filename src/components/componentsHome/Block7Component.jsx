import React from 'react'
import drandulet71 from '../../foto/fotoHome/Блок7/1фото/drandulet71.png';
import rectangle71 from '../../foto/fotoHome/Блок7/1фото/Rectangle71.png';
import strelkaleft71 from '../../foto/fotoHome/Блок7/1фото/strelkaleft71.png';
import strelkaright71 from '../../foto/fotoHome/Блок7/1фото/strelkaright71.png';
import black71 from '../../foto/fotoHome/Блок7/1фото/black71.png';
import gray71 from '../../foto/fotoHome/Блок7/1фото/gray71.png';
import sand71 from '../../foto/fotoHome/Блок7/1фото/sand71.png';
import sandBlack71 from '../../foto/fotoHome/Блок7/1фото/sandBlack71.png';    
import drandulet72 from '../../foto/fotoHome/Блок7/2фото/drandulet72.png';
import rectangle72 from '../../foto/fotoHome/Блок7/2фото/Rectangle72.png';
import strelkaleft72 from '../../foto/fotoHome/Блок7/2фото/strelkaleft72.png';
import strelkaright72 from '../../foto/fotoHome/Блок7/2фото/strelkaright72.png';
import black72 from '../../foto/fotoHome/Блок7/2фото/black72.png';
import gray72 from '../../foto/fotoHome/Блок7/2фото/gray72.png';
import sand72 from '../../foto/fotoHome/Блок7/2фото/sand72.png';
import sandWhite72 from '../../foto/fotoHome/Блок7/2фото/sandWhite72.png';

import style7 from '../../styles/stylesHome/style7.css';  

function Block7Component() {
  return (
    <div className='aaa7'>
      <div className='all71'>
        <img src={rectangle71} className='photo7'></img>
        <div className='big71'>
          <div className='span71'>
            <p className='text71'>Electric Ace</p>
            <p className='text72'>Two</p>
            <p className='text73'>€69,07 NET/MONTH</p>
          </div>
          <div className='span72'>
            <img src={strelkaleft71} className='strelkaleft7'></img>
            <img src={drandulet71} className='velik7'></img>
            <img src={strelkaright71} className='strelkaright7'></img>
          </div>
          <div className='span73'>
            <img src={black71} className='blackcol7'></img> 
            <img src={gray71} className='graycol7'></img>
            <img src={sand71} className='sandcol7'></img>
            <img src={sandBlack71} className='sandBlackcol7'></img>
          </div>
        </div>
      </div>
      <div className='all72'>
        <img src={rectangle72} className='photo72'></img>
        <div className='big72'>
          <div className='span712'>
            <p className='text712'>Electric Ivy</p>
            <p className='text722'>Two</p>
            <p className='text732'>€69,07 NET/MONTH</p>
          </div>
          <div className='span722'>
            <img src={strelkaleft72} className='strelkaleft72'></img>
            <img src={drandulet72} className='velik72'></img>
            <img src={strelkaright72} className='strelkaright72'></img>
          </div>
          <div className='span732'>
            <img src={black72} className='blackcol72'></img> 
            <img src={gray72} className='graycol72'></img>
            <img src={sand72} className='sandcol72'></img>
            <img src={sandWhite72} className='sandWhitecol72'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block7Component
