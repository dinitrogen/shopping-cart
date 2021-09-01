import React from 'react';
import ShopItemCard from './ShopItemCard';
import shopItems from './shopItems';
import '../styles/Shop.css';

const Shop = () => {
  


  return (
      <div className="contentDiv">
        <h1>Shop All Items</h1>
        <div className='shopItemsDiv'>
          {shopItems.map((shopItem) => 
            <ShopItemCard
              key={shopItem.id}
              itemName={shopItem.name}
              itemId={shopItem.id}
              itemPrice={shopItem.price}
              itemImg={shopItem.imgUrl}
            /> 
          )}
        </div>
      </div>
  );
}

export default Shop;