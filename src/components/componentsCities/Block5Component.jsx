import React from 'react'
import man5 from '../../foto/fotoCities/Блок5/man5.png';
import ring5 from '../../foto/fotoCities/Блок5/ring5.png';
import bigring5 from '../../foto/fotoCities/Блок5/bigring5.png';
import style5 from '../../styles/stylesCities/style5.css';

function Block5Component() {
  return (
    <div className='citiesBlock5'>
      <div className='citiesBlock5flex'>
        <img src={man5} className='citiesBlock5img1'></img>
        <img src={ring5} className='citiesBlock5img2'></img>
      </div>
      <div className='citiesBlock5div1'>
        <div className='citiesBlock5div1div1'>
          <p className='citiesBlock5div1div1p1'>Whether you like it easy or<br></br>fast, we got both. Our<br></br>men's range of bicycles<br></br>combine modern clean<br></br>design with great quality,<br></br>so they're perfect for your<br></br>daily city commute. Our<br></br>men citybikes are the<br></br>Caféracer, Caféchaser<br></br>and the Berlin, but feel<br></br>free to opt for a women's<br></br>bike for that easy hop-on-<br></br>hop-off Amsterdam style.</p>
        </div>
        <img src={bigring5} className='citiesBlock5div1img1'></img>
      </div>
      <p className='citiesBlock5p1'>City bikes for<br></br>everyone.</p>
    </div>
  )
}

export default Block5Component