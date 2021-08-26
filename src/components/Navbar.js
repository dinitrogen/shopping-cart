import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
          <Link className="navLink" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;