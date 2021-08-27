import React from 'react';
import { Link } from 'react-router-dom';


const ShopItemCard = ({itemName, itemId}) => {
  
  
  return (
      <div className="ShopItemCardDiv">
        <h1><Link to={`/shop/${itemId}`}>{itemName}</Link></h1>

      </div>
  );
}

export default ShopItemCard;