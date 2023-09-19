import React, { useState } from 'react';
import "./header.scss";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Down from "../../assets/dropdown.png";
import SignUp from "../SignUp/Signup";

const Header = () => { 
  const [open,setOpen] = useState(null);
  return (
    <div className='header'>
        <img className='main-logo' src={Logo} alt='Logo'></img>
        <div className='search'>
            <img className='sealogo' src={Search} alt='Search'></img>
            <input type='text' className='search-text' placeholder='Search for your favorite groups in ATG'></input>
        </div>
        <div className='right' onClick={()=> setOpen(!open)}>
            <div className='spandiv'>
                <span>Create account.</span>
                <span className='boldspan'>It's free!</span>
            </div>
            <img className='down' src={Down} alt='dropdown'></img>
        </div>
        {open && <SignUp/>}
    </div>
  )
}

export default Header