import React from 'react'
import verge8 from '../../foto/fotoProducts/Блок8/verge8.png';
import bright8 from '../../foto/fotoProducts/Блок8/bright8.png';
import vogue8 from '../../foto/fotoProducts/Блок8/vogue8.png';

import style8 from '../../styles/stylesProducts/style8.css';

function Block8Component() {
  return (
    <div>
        <p className='productsBlock8p1'>They talked about us</p>
        <div className='productsBlock8all'>
            <div className='productsBlock8div1'>
                <p className='productsBlock8div1p1'>"One of the best e-bikes available at<br></br>any price and far and away my<br></br>favourite ride of the year."</p>
                <img src={verge8} className='productsBlock8div1img1'></img>
            </div>
            <div className='productsBlock8div2'>
                <p className='productsBlock8div1p2'>“This second-generation Ace is a<br></br>superhero amongst urban e-<br></br>bikes… 9/10.”</p>
                <img src={bright8} className='productsBlock8div1img2'></img>
            </div>
            <div className='productsBlock8div3'>
                <p className='productsBlock8div1p3'>"The timeless, chic design and<br></br>stunning craftsmanship make<br></br>them the perfect way to get<br></br>around the city."</p>
                <img src={vogue8} className='productsBlock8div1img3'></img>
            </div>
        </div>
    </div>

  )
}

export default Block8Component
