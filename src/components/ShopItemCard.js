import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';


const ShopItemCard = ({itemName, itemId, itemPrice, itemImg}) => {
  
  
  return (
      <div className="shopItemCardDiv">
        <Link to={`/shop/${itemId}`}>
          <img className="itemThumbnail" src={itemImg} alt='' height="150vh"/>
        </Link>
        <h2>{itemName}</h2>
        <h3>${itemPrice}.00</h3>

      </div>
  );
}

export default ShopItemCard;