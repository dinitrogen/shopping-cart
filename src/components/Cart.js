import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartItemCard from './CartItemCard';
import '../styles/Cart.css';


const Cart = ({cartItems, handleQtyChange}) => {

  const cartNode = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown',handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (cartNode.current.contains(e.target)) {
      return;
    }
    document.querySelector('.cartDisplay').classList.remove('active');
  }

  const hideCart = () => {
    document.querySelector('.cartDisplay').classList.remove('active');
  }


  return (
      <div className="cartDisplay" ref={cartNode}>
       
        <div className="cartHeader">
          
          <Link to="/shop">
            <button className="cartButton" onClick={hideCart}>Continue shopping</button>
          </Link>
        </div>
        <h1>Cart</h1>
        <div className="cartItemDiv">
          {cartItems.map((cartItem) => 
            <CartItemCard
                key={cartItem.id}
                itemName={cartItem.name}
                itemQty={cartItem.qty}
                handleInputChange={(e) => handleQtyChange(e,cartItem)}
            /> 
          )}
        </div>
        <button>Checkout</button>
      </div>
  );
}

export default Cart;