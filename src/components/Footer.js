import React from 'react';
import { Link } from 'react-router-dom';
import twIcon from '../img/tw-icon.png';
import igIcon from '../img/ig-icon.png';
import fbIcon from '../img/fb-icon.png';
import '../styles/Footer.css';


const Footer = () => {


  return (
      <footer>
        <ul className="footerList">
            <li className="footerText">&copy; 2024 Tiny Friends Woodshop</li>
            <li className="footerLinks">
                <div className="footerIcon">
                  <a href="#"><img src={twIcon} alt="twitter" width="20px"/></a>
                </div>
                <div className="footerIcon">
                  <a href="#"><img src={igIcon} alt="instagram" width="20px"/></a>
                </div>
                <div className="footerIcon">
                  <a href="#"><img src={fbIcon} alt="facebook" width="20px" /></a>
                </div>
            </li>
            
        </ul>

      </footer>
  );
}

export default Footer;