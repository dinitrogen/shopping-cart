import React, { useEffect, useState } from 'react';


const CartItemCard = ({itemName, itemQty, handleInputChange }) => {

  

  return (
      <div className="CartItemCardDiv">
        <h2>{itemName}</h2>
        
        
          <input
            type="number"
            value={itemQty}
            onChange={handleInputChange} />
        
      </div>
  );
}

export default CartItemCard;