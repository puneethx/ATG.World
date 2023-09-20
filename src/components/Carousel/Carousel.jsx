import React from 'react';
import "./carousel.scss";
import CaroImg from "../../assets/carousel.png";
import CaroImgsm from "../../assets/carouselsm.png"


const Carousel = () => {
  return (
    <div className='carousel'>
        <img className='caro-img' src={CaroImg} alt='img'></img>
        <img className='caro-img-sm' src={CaroImgsm} alt='img'></img>
        <div className='span-div'>    
            <span className='caro-span'>Computer Engineering</span><br/>
            <span className='caro-spansm'>142,765 Computer Engineers follow this</span>
        </div>  
        <button className='joinbtn'>Join Group</button>  
    </div>
  )
}

export default Carousel