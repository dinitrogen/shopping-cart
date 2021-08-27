import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../img/cart.svg';
import sawIcon from '../img/saw.svg';


const Navbar = ({ cartQty }) => {


  return (
      <nav>
        <Link to="/">
          <div><img src={sawIcon} alt="saw" height="60px" /></div>
        </Link>
        <ul className="nav-links">
          <Link className="navLink" to="/">
            <li>Home</li>
          </Link>
          <Link className="navLink" to="/shop">
            <li>Shop</li>
          </Link>
          <Link className="navLink" to="/about">
            <li>About</li>
          </Link>
          <Link className="navLink" to="/cart">
            <li>
              <div className="cartIcon">
              <img src={cartIcon} alt="cart" height="36px" />
              {cartQty > 0 &&
              <span className="cartQty"><span>{cartQty}</span></span>}
              </div>
            </li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;