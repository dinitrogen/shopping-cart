import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import shopItems from './shopItems';
import '../styles/Shop.css';


const Item = ({handleAdd}) => {
  let { id } = useParams();
  const [item, setItem] = useState({});
  
  useEffect(() => {
    let currentItem = shopItems.find((shopItem) => {
      return shopItem.id === id
    })
    setItem(currentItem)
  },[id])  
  
  
  return (
      <div className="itemDiv contentDiv">
        <img className="itemThumbnail" src={item.imgUrl} alt="item" width="40%"></img>
        <h1>{item.name} </h1>
        <h2>${item.price}.00</h2>
        <br/>
        <p>{item.description}</p>
          <div className="itemButtonDiv">
            <button className="addToCartBtn" onClick={() => handleAdd(item)}>Add to cart</button>
            <br/>
            <div className="addToCartMsg"></div>
            <Link to="/shop"><button className="backBtn">&lt; Back</button></Link>
          </div>
      </div>
  );
}

export default Item;