import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../img/cart.svg';
import sawIcon from '../img/saw.svg';


const Navbar = ({ cartQty }) => {

const mobileMenu = () => {
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
}

const closeMobileMenu = () => {
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.nav-links').classList.remove('active');
  
}

const handleCartClick = () => {
  if (document.querySelector('.cartDisplay').classList.contains('active')) {
    return;
  }
  document.querySelector('.cartDisplay').classList.toggle('active');
  document.querySelector('.hamburger').classList.remove('active');
  document.querySelector('.nav-links').classList.remove('active');

}

  return (
      <nav>
        <Link className="navLogo" to="/" onClick={closeMobileMenu}>
          <div><img src={sawIcon} alt="saw"  width="100%"/></div>
        </Link>
        <ul className="nav-links">
          <Link className="navLink" to="/" onClick={closeMobileMenu}>
            <li>Home</li>
          </Link>
          <Link className="navLink" to="/shop" onClick={closeMobileMenu}>
            <li>Shop</li>
          </Link>
          <Link className="navLink" to="/about" onClick={closeMobileMenu}>
            <li>About</li>
          </Link>
          </ul>

          <div className="navLink"  onClick={handleCartClick}>
            
              <div className="cartIcon">
              <img src={cartIcon} alt="cart" height="36px" />
              {cartQty > 0 &&
              <span className="cartQty"><span>{cartQty}</span></span>}
              </div>
            
          </div>
        
        <div className="hamburger" onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </nav>
  );
}

export default Navbar;