import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartItemCard from './CartItemCard';
import '../styles/Cart.css';


const Cart = ({cartItems}) => {

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

  return (
      <div className="cartDisplay" ref={cartNode}>
        <h1>Cart</h1>
        <div>
          {cartItems.map((cartItem) => 
            <CartItemCard
                key={cartItem.id}
                itemName={cartItem.name}
                itemQty={cartItem.qty}
            /> 
          )}
        </div>
        <button>Checkout</button>
      </div>
  );
}

export default Cart;