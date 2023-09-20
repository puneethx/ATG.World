import React,{useState} from 'react'
import "./signIn.scss";
import Eye from "../../assets/eye.svg"
import SignupImg from "../../assets/signup.png"
import FBLogo from "../../assets/fblogo.png";
import GLogo from "../../assets/googlelogo.png";
import Signup from '../SignUp/Signup';

const SignIn = () => {
  const [inOpen,setInOpen] = useState(null);
  return (
    <div id='signIn' className='signIn'>
        <div className='topbar'> 
          <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
        </div>
        <div className='acc'>
          <h1>Sign In</h1>
          <span>Don't have an account yet? <span className='bluebold' onClick={()=> setInOpen(!inOpen)}>Create new for free!</span></span>
        </div>
        <div className='main'>
          <div className="left">
            <div className='table'>
              <div className='row'>
                <div><input type='email' id='email' placeholder='Email'></input></div>
              </div>
              <div className='second-row'>
                <div className='password'><input type='password' id='password' placeholder='Password'></input><div className='eyediv'><img src={Eye} alt='none'></img></div></div>
              </div>
            </div>
            <div className="middle">
              <button className='createBtn'>
                Sign In
              </button>
              <span className='bluebold' onClick={()=> setInOpen(!inOpen)}> Or,Create Account</span>
            </div>
            <div className='platform'>
              <button className='FB'>
                <img src={FBLogo} alt="Facebook"/>
                Sign Up with Facebook
              </button>
              <button className='Google'>
                <img src={GLogo} alt="Google"/>
                Sign Up with Google
              </button>
              <a href='/'>Forgot Password?</a>
            </div>
          </div>
          <div className="right">
            <img src={SignupImg} alt='img'></img>
            <span>By signing up, you agree to our Terms & conditions, Privacy policy</span>
          </div>
        </div>
        {inOpen && <Signup/>}
    </div>
  )
}

export default SignIn