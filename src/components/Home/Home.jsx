import React from 'react'
import "./home.scss"
import Post1 from "../../assets/postimg1.png"
import Post2 from "../../assets/postimg2.png"
import Post3 from "../../assets/postimg3.png"
import Location from "../../assets/location.png"
import Edit from "../../assets/edit.png"
import Menu from "../../assets/menu.png"
import UserImg from "../../assets/userimg.png"
import UserImg1 from "../../assets/userimg1.png"
import UserImg2 from "../../assets/userimg2.png"
import Share from "../../assets/share.png"
import Views from "../../assets/views.png"

const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <div className="post-ared">
          <img src={Post1} className='postimg' alt='img'></img>
          <div className='text'>
            <div><span className='medtext'>✍️ Article</span><br/></div>
            <div className='postmenu'>
              <div className="postleft">
                <span className='boldtext'>What if famous brands had regular fonts? Meet RegulaBrands!</span>
              </div>
              <div className="postright"><img src={Menu} alt="menu" /></div>
            </div>
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
        </div>
        <div className="post-ared">
          <img src={Post2} className='postimg' alt='img'></img>
          <div className='text'>
            <div><span className='medtext'>🔬️ Education</span><br/></div>
            <div className='postmenu'>
              <div className="postleft">
                <span className='boldtext'>Tax Benefits for Investment under National Pension Scheme launched by Government</span>
              </div>
              <div className="postright"><img src={Menu} alt="menu" /></div>
            </div>
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
        </div>
        <div className="post-ared">
          <img src={Post3} className='postimg' alt='img'></img>
          <div className='text'>
            <div><span className='medtext'>🔬️ Education</span><br/></div>
            <div className='postmenu'>
              <div className="postleft">
                <span className='boldtext'>Finance & Investment Elite Social Mixer @Lujiazui</span>
              </div>
              <div className="postright"><img src={Menu} alt="menu" /></div>
            </div>
            <div><span className='smtext'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span></div>
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
        </div>
      </div>
      <div className="right">
        <div className="location">
          <img src={Location} alt='img'></img>
          <span>Noida, India</span>
          <img src={Edit} alt='img'></img>
        </div>
      </div>
    </div>
  )
}

export default Home