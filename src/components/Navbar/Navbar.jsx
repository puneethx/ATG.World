import React from 'react';
import "./navbar.scss";
import Down from "../../assets/dropdown.png";
import Group from "../../assets/group.png";

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className="left">
                <ul className='navul'>
                    <li id='active'>All Posts(32)</li>
                    <li>Article</li>
                    <li>Event</li>
                    <li>Eductation</li>
                    <li>Job</li>
                </ul>
            </div>
            <div className="right">
                <div className='post'>
                    <span>Write a Post</span>
                    <img src={Down} alt='img'></img>
                </div>
                <div className='group'>
                    <img src={Group} alt='img'></img>
                    <span>Join Group</span>
                </div>
            </div>
        </div>
        <div className='linediv'>
            <hr className='line'/>
        </div>
    </div>
  )
}

export default Navbar