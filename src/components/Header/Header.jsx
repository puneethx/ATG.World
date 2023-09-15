import React from 'react'
import "./header.scss";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Down from "../../assets/dropdown.png";

const Header = () => {
  return (
    <div className='header'>
        <img className='main-logo' src={Logo} alt='Logo'></img>
        <div className='search'>
            <img className='sealogo' src={Search} alt='Search'></img>
            <input type='text' className='search-text' placeholder='Search for your favorite groups in ATG'></input>
        </div>
        <div className='right'>
            <div className='spandiv'>
                <span>Create account.</span>
                <span className='boldspan'>It's free!</span>
            </div>
            <img className='down' src={Down} alt='dropdown'></img>
        </div>
    </div>
  )
}

export default Header