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
                    <li id='active'><span>All</span> Posts(368)</li>
                    <li id='inactive'>Article</li>
                    <li id='inactive'>Event</li>
                    <li id='inactive'>Eductation</li>
                    <li id='inactive'>Job</li>
                    <li id='filter'> 
                        <select className='filterdrop' name='filter' id='filter'>
                            <option>Filter: All</option>
                            <option value="Article">Article</option>
                            <option value="Event">Event</option>
                            <option value="Education">Education</option>
                            <option value="Job">Job</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className='post'>
                    <span>Write a Post</span>
                    <img src={Down} alt='img'></img>
                </div>
                <button className='group'>
                    <img src={Group} alt='img'></img>
                    <span>Join Group</span>
                </button>
            </div>
        </div>
        <div className='linediv'>
            <hr className='line'/>
        </div>
    </div>
  )
}

export default Navbar