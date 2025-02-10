import { assets } from '../../assets/frontend_assets/assets';
import './footer.css'

const Footer = () => {
    return(
        <div className="footer" id='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi enim aut optio illum, magnam aliquam reiciendis molestiae cum vel ad, dolores necessitatibus nam dignissimos! Officia necessitatibus soluta iusto nesciunt.</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt=""/> 
             </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+1-212-456-7000</li>
                    <li>contact@tomato.com</li>
                  </ul>
            </div>
          </div>
          <hr />
          <p className="footer-copyright">Copyright 2025 0 Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer;