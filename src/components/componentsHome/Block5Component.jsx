import React from 'react'
import scuter from '../../foto/fotoHome/Блок5/scuter.png';
import style5 from '../../styles/stylesHome/style5.css';

function Block5Component() {
  return (
    <div className='block5'>
        <img src={scuter} className='scuter'></img>
        <div className='text5'>
            <p className='free'>Free of charge for<br></br>employers</p>
            <p className='plan'>The bike plan is totally independent of the WKR and is free for you as<br></br>an employer. The employee pays the lease costs and you, as the<br></br>employer, decide whether you want to contribute to the costs.</p>
            <p className='cost'>Cost Example</p>
        </div>
    </div>
  )
}

export default Block5Component
