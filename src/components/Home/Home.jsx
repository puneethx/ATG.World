import React,{useState} from 'react'
import "./home.scss"
import Post1 from "../../assets/postimg1.png"
import Post2 from "../../assets/postimg2.png"
import Post3 from "../../assets/postimg3.png"
import Calendar from "../../assets/calendar.png"
import Error from "../../assets/error.png"
import Location from "../../assets/location.png"
import Company from "../../assets/company.png"
import Edit from "../../assets/edit.png"
import Thumb from "../../assets/thumb.png"
import Menu from "../../assets/menu.png"
import UserImg from "../../assets/userimg.png"
import UserImg1 from "../../assets/userimg1.png"
import UserImg2 from "../../assets/userimg2.png"
import UserImg3 from "../../assets/userimg3.png"
import Share from "../../assets/share.png"
import Views from "../../assets/views.png"
import Grp1 from "../../assets/grp1.png";
import Grp2 from "../../assets/grp2.png";
import Grp3 from "../../assets/grp3.png";
import Grp4 from "../../assets/grp4.png";
import MenuBtn from '../Menu/Menu';


const Home = () => {
  const [menuOpen1,setMenuOpen1] = useState(null);
  const [menuOpen2,setMenuOpen2] = useState(null);
  const [menuOpen3,setMenuOpen3] = useState(null);
  return (
    <div className='home'>
      <div className="left">
        <div className="post-ared">
          <img src={Post1} className='postimg' alt='img'></img>
          <div className='text'>
              <button className='menu' onClick={()=> setMenuOpen1(!menuOpen1)}>
                <img src={Menu} alt="menu"/>
              </button>
            <div><span className='medtext'>✍️ Article</span><br/></div>
            <span className='boldtext'>What if famous brands had regular fonts? Meet RegulaBrands!</span>
            <div><span className='smtext'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span></div>
          </div>
          <div className='userEx'>
            <div className='userleft'>
              <img src={UserImg1} alt="user" className='userImg'/>
              <div><span>Puneeth Reddy</span></div>
            </div>
            <div className='userright'>
              <div><img src={Views} alt="views" className='views'/></div>
              <div><img src={Share} alt="share" className='share'/></div>
            </div>
          </div>
          {menuOpen1 && <MenuBtn/>}
        </div>
        <div className="post-ared">
          <img src={Post2} className='postimg' alt='img'></img>
          <div className='text'>
            <button className='menu' onClick={()=> setMenuOpen2(!menuOpen2)}>
              <img src={Menu} alt="menu"/>
            </button>
            <div><span className='medtext'>🔬️ Education</span><br/></div>
            <span className='boldtext'>Tax Benefits for Investment under National Pension Scheme launched by Government</span>
            <div><span className='smtext'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span></div>
          </div>
          <div className='userEx'>
            <div className='userleft'>
              <img src={UserImg} alt="user" className='userImg'/>
              <div><span>Sarah West</span></div>
            </div>
            <div className='userright'>
              <div><img src={Views} alt="views" className='views'/></div>
              <div><img src={Share} alt="share" className='share'/></div>
            </div>
          </div>
          {menuOpen2 && <MenuBtn/>}
        </div>
        <div className="post-ared">
          <img src={Post3} className='postimg' alt='img'></img>
          <div className='text'>
            <button className='menu' onClick={()=> setMenuOpen3(!menuOpen3)}>
              <img src={Menu} alt="menu"/>
            </button>
            <div><span className='medtext'>🔬️ Education</span><br/></div>
            <span className='boldtext'>Finance & Investment Elite Social Mixer @Lujiazui</span>
            <div className='details'>
              <div className='date'>
                <img src={Calendar} alt='calendar'></img>
                <span>Fri, 12 Oct, 2018</span>
              </div>
              <div className='location'>
                <img src={Location} alt="location"/>
                <span>Ahmedabad, India</span>
              </div>
            </div>
            <div className="website">
              <button className='websitebtn'>Visit Website</button>
            </div>
          </div>
          <div className='userEx'>
            <div className='userleft'>
              <img src={UserImg2} alt="user" className='userImg'/>
              <div><span>Ronal Jones</span></div>
            </div>
            <div className='userright'>
              <div><img src={Views} alt="views" className='views'/></div>
              <div><img src={Share} alt="share" className='share'/></div>
            </div>
          </div>
          {menuOpen3 && <MenuBtn/>}
        </div>
        <div className="post-ared">
          <div className='text'>
            <button className='menu'>
              <img src={Menu} alt="menu"/>
            </button>
            <div><span className='medtext'>💼️ Job</span><br/></div>
            <span className='boldtext'>Software Developer</span>
            <div className='details'>
              <div className='date'>
                <img src={Company} alt='company'></img>
                <span>Innovacer Analytics Private Ltd.</span>
              </div>
              <div className='location'>
                <img src={Location} alt="location"/>
                <span>Noida, India</span>
              </div>
            </div>
            <div className="Apply">
              <button className='applybtn'>Apply on Timesjobs</button>
            </div>
          </div>
          <div className='userEx'>
            <div className='userleft'>
              <img src={UserImg3} alt="user" className='userImg'/>
              <div><span>Joseph Gray</span></div>
            </div>
            <div className='userright'>
              <div><img src={Views} alt="views" className='views'/></div>
              <div><img src={Share} alt="share" className='share'/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className='locedit'>
          <img src={Location} alt='img'></img>
          <input type='text' className='input' placeholder='Noida, India'></input>
          <img src={Edit} alt='img'></img>
        </div>
        <div className="loctext">
          <img src={Error} alt='img'></img>
          <span className='locspan'>Your location will help us serve better and extend a personalised experience.</span>
        </div>
        <div className='reco'>
          <div className='recoimg'><img src={Thumb} alt="Group"/></div>
          <div><span>RECOMMENDED GROUPS</span></div>
        </div>
        <div className='groups'>
          <div className='grp'>
            <div className='grpleft'>
              <img src={Grp1} alt="img"/>
              <span>Leisure</span>
            </div>
            <div className='grpright'>
              <button className='grpbtnbl'>Followed</button>
            </div>
          </div>
          <div className='grp'>
          <div className='grpleft'>
              <img src={Grp2} alt="img"/>
              <span>Activism</span>
            </div>
            <div className='grpright'>
              <button className='grpbtn'>Follow</button>
            </div>
          </div>
          <div className='grp'>
          <div className='grpleft'>
              <img src={Grp3} alt="img"/>
              <span>MBA</span>
            </div>
            <div className='grpright'>
              <button className='grpbtn'>Follow</button>
            </div>
          </div>
          <div className='grp'>
          <div className='grpleft'>
              <img src={Grp4} alt="img"/>
              <span>Philosophy</span>
            </div>
            <div className='grpright'>
              <button className='grpbtn'>Follow</button>
            </div>
          </div>
        </div>
        <div className='seemore'><p className='smore'>See More...</p></div>
      </div>
    </div>
  )
}

export default Home