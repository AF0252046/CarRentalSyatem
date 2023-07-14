import './Footerstyle.css';
import{Link,NavLink} from 'react-router-dom'
function Footer(){
    return(
        <div className="Footer">
            <div className="contain">
                <div className="rows">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                        <li><NavLink to="/Home" className="Nav-footer-btn" >Home</NavLink></li>
                        <li><NavLink to="/About"  className="Nav-footer-btn">About</NavLink></li>
                        <li><NavLink to="/Services"  className="Nav-footer-btn">Services</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Get Help</h4>
                        <ul>
                        <li><NavLink to="#" className="Nav-footer-btn" >FAQ</NavLink></li>
                        <li><NavLink to="#"  className="Nav-footer-btn">Blog</NavLink></li>
                        <li><NavLink to="#"  className="Nav-footer-btn">Privacy & Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                    <h4>Booking Systems</h4>
                        <ul>
                        <li><NavLink to="#" className="Nav-footer-btn" >Book A Cab</NavLink></li>
                        <li><NavLink to="#"  className="Nav-footer-btn">Sign Up</NavLink></li>
                        </ul>
                    </div>
                    
                    
                </div>


            </div>
        
        </div>
    )
}
export default Footer;