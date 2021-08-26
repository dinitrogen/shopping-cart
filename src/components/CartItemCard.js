import React from 'react';


const CartItemCard = ({itemName, itemQty }) => {
  
  
  return (
      <div className="CartItemCardDiv">
        <h1>{itemName} {itemQty}</h1>

      </div>
  );
}

export default CartItemCard;