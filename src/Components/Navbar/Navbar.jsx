import React from 'react'
import './Navbar.css'
import logo from '../../assets/swift-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>About</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#profile'><p onClick={() => setMenu("profile")}>Profile</p></AnchorLink>{menu === "profile" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#resume'><p onClick={() => setMenu("resume")}>Resume</p></AnchorLink>{menu === "resume" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#gallery'><p onClick={() => setMenu("gallery")}>Gallery</p></AnchorLink>{menu === "gallery" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect">Connect With Us</div>
    </div>
  )
}

export default Navbar