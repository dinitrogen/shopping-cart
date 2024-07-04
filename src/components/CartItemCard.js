import React, { useEffect, useState } from 'react';


const CartItemCard = ({itemName, itemQty, handleInputChange }) => {

  

  return (
      <div className="CartItemCardDiv">
        <br/><br/>
        <h2>{itemName}</h2><br/>
        
        
          <input
            className="cartInput"
            type="number"
            value={itemQty}
            onChange={handleInputChange} /><br/>
        
      </div>
  );
}

export default CartItemCard;