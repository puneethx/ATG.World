import React, { useState } from 'react';
import "./header.scss";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Close from "../../assets/close.png";
import Down from "../../assets/dropdown.png";
import SignUp from "../SignUp/Signup";
import Back from "../../assets/back.svg";

const Header = () => { 
  const [open,setOpen] = useState(null);
  return (
    <div className="header">
      <div className='large-header'>
        <img className='main-logo' src={Logo} alt='Logo'></img>
        <div className='search'>
            <img className='sealogo' src={Search} alt='Search'></img>
            <input type='text' className='search-text' placeholder='Search for your favorite groups in ATG'></input>
        </div>
        <div className='right'>
            <div className='spandiv'>
                <span>Create account.</span>
                <span className='boldspan' onClick={()=> setOpen(!open)}>It's free!</span>
            </div>
            <img className='down' src={Down} alt='dropdown'></img>
        </div>
        {open && 
        <>
          <SignUp/>
          <img src={Close} alt='img' className='closebutn' onClick={()=> setOpen(!open)}></img>
        </>}
      </div>
      <div className="small-header">
          <img src={Back} alt="" />
      </div>
    </div>
  )
}

export default Header