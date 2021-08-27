import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../img/cart.svg'


const Navbar = ({ cartQty }) => {


  return (
      <nav>
        <h3>Logo</h3>
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
              <span className="cartQty">{cartQty}</span>}
              </div>
            </li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;