import React, { useState } from 'react'
import "./signup.scss"
import Eye from "../../assets/eye.svg"
import SignupImg from "../../assets/signup.png"
import FBLogo from "../../assets/fblogo.png";
import GLogo from "../../assets/googlelogo.png";
import SignIn from "../SignIn/SignIn";

const Signup = () => {
  const [inOpen,setInOpen] = useState(null);
  return (
    <div className='signup'>
        <div className='topbar'> 
          <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </div>
        <div className='acc'>
          <h1>Create Account</h1>
          <span>Already have an account? <span className='bluebold'><a onClick={()=> setInOpen(!inOpen)}>Sign In</a></span></span>
        </div>
        <div className='main'>
          <div className="left">
            <div className='table'>
              <div className='first-row'>
                <div><input type='text' id='firstname' placeholder='First Name'></input></div>
                <div><input type='text' id='Lastname' placeholder='Last Name'></input></div>
              </div>
              <div className='row'>
                <div><input type='email' id='email' placeholder='Email'></input></div>
              </div>
              <div className='third-row'>
                <div className='password'><input type='password' id='password' placeholder='Password'></input><div className='eyediv'><img src={Eye} alt='none'></img></div></div>
              </div>
              <div className='row'>
                <div><input type='password' id='password2' placeholder='Confirm Password'></input></div>
              </div>
            </div>
            <button className='createBtn'>
              Create Account
            </button>
            <div className='platform'>
              <button className='FB'>
                <img src={FBLogo} alt="Facebook"/>
                Sign Up with Facebook
              </button>
              <button className='Google'>
                <img src={GLogo} alt="Google"/>
                Sign Up with Google
              </button>
            </div>
          </div>
          <div className="right">
            <img src={SignupImg} alt='img'></img>
            <span>By signing up, you agree to our Terms & conditions, Privacy policy</span>
          </div>
        </div>
        {inOpen && <SignIn/>}
    </div>
  )
}

export default Signup