import React from 'react';
import { Link } from 'react-router-dom';


const ShopItemCard = ({itemName, itemId, handleClick}) => {
  
  
  return (
      <div className="ShopItemCardDiv">
        <h1><Link to={`/shop/${itemId}`}>{itemName}</Link></h1>
        <button onClick={handleClick}>Add to cart</button>

      </div>
  );
}

export default ShopItemCard;