import React from 'react';
import CartItemCard from './CartItemCard';


const Cart = ({cartItems}) => {
  return (
      <div>
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
      </div>
  );
}

export default Cart;