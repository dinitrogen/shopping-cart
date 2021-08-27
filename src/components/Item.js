import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shopItems from './shopItems';



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
      <div>
        <h1>{item.name} </h1>
        <p>{item.description}</p>
        <button onClick={() => handleAdd(item)}>Add to cart</button>

      </div>
  );
}

export default Item;