import React from 'react';
import ShopItemCard from './ShopItemCard';
import shopItems from './shopItems';

const Shop = () => {
  


  return (
      <div>
        <h1>Shop</h1>
        <div>
          {shopItems.map((shopItem) => 
            <ShopItemCard
              key={shopItem.id}
              itemName={shopItem.name}
              itemId={shopItem.id} 
            /> 
          )}
        </div>
      </div>
  );
}

export default Shop;