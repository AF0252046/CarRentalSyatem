import React, { useState } from "react";
import{Link,NavLink} from 'react-router-dom'
import { BrowserRouter,Router,Routes,Route } from "react-router-dom";
import './headerstyle.css';
import About from "./About";
import Blog from"./Blog";
import Home from "./Home";

import { RiContactsBookFill } from "@fortawesome/fontawesome-svg-core";
import { BsJustify,BsFillHouseFill,BsGlobe2,BsPersonSquare,BsPersonVideo2 } from "react-icons/bs";
import Footer from "./Footer";

// import logo3 from './src/../assets/images/logo3.png'
function Header() {
  const [sidebar ,setsidebar]= useState(false);
  const [home ,sethome]= useState(true);
    return(
     
      <>
      
          <nav className="navbar navbar-expand navbar-dark bg-dark px-2">
          <div className="icon"> 
            <BsJustify onClick={Event=>{setsidebar(!sidebar);sethome(!home);}}/>
          </div>
          <div className="logo">
          <img src="./images/logo3.png"/>
          </div>
              <div className="menu">
                <ul>
                  
                  <li><NavLink to="/Home" className="Nav-button" >Home</NavLink></li>
                  <li><NavLink to="/About"  className="Nav-button">About</NavLink></li>
                  <li><NavLink to="/Blog"  className="Nav-button">Blog</NavLink></li>
                  <li><NavLink to="/Services"  className="Nav-button">Services</NavLink></li>
                </ul>
              </div>
              <div className="sign">
              <NavLink to="/signin" className="Nav-button"><li>Sign in</li></NavLink>
              </div>
              </nav>


              <div className="sidehome">
              <div className="sidebar_content">
                <div 
                className={`sidebar_container ${sidebar ? "open" : ""}`}
                
                >
                  <div className="side_option option1">
                    <BsFillHouseFill className="iconn"/> 
                     <h5>Home</h5> 
                  </div>
                  <div className="side_option option2">
                    <BsGlobe2 className="iconn"/>
                    <h5>About</h5>
                  </div>
                  
                  <div className="side_option option1">
                  <BsPersonVideo2 className="iconn"/>
                     <h5>Contact</h5> 
                  </div>
                  <div className="side_option option1">
                    <BsPersonSquare className="iconn"/> 
                     <h5>Sign in</h5> 
                  </div>
                </div>
                </div>
                
              <div className="homee">
                <div
                 className={`homecontain ${home ? "close" : ""}`}
                 >
              <Home/>

              </div>
              </div>
                </div>


                <Footer/>
                </>

             
        
    );
}
export default Header;
