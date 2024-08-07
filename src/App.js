import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Item from './components/Item';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const [cartQty, setCartQty] = useState(0);
  const [cartContents, setCartContents] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    calculateCartQty();
    calculateTotalPrice();
  });
  
  const calculateCartQty = () => {
    let itemQtys = cartContents.map((cartItem) => {
      return cartItem.qty;
    });
    let totalQty = itemQtys.reduce((prev, currrent) => parseInt(prev) + parseInt(currrent), 0);
    setCartQty(totalQty);
  }

  const addToCart = (item) => {
    let itemId = item.id;
    
    const newCartQty = cartQty + 1;
    setCartQty(newCartQty);

    let cartIds = cartContents.map((cartItem) => {
      return cartItem.id;
    });

    if (cartIds.includes(itemId)) {
      setCartContents(
        cartContents.map((cartItem)=> {
          return (cartItem.id === itemId ? {...cartItem, qty: cartItem.qty + 1} : cartItem)
        })
      )
    } else {
      setCartContents([...cartContents, {...item, qty: 1}])
    }
    document.querySelector('.addToCartMsg').innerHTML = 'Added to cart!';
  }

  const changeItemQty = (e, item) => {
    let newItemQty = e.target.value
    if (newItemQty === '') {
      newItemQty = 0;
    }
    let itemId = item.id;
    setCartContents(
      cartContents.map((cartItem) => {
        return (cartItem.id === itemId ? {...cartItem, qty: parseInt(newItemQty)} : cartItem)
      })
    )
  }

  const calculateTotalPrice = () => {
    let itemSubtotals = cartContents.map((cartItem) => {
      return (cartItem.qty * cartItem.price)
    });
    let newTotalPrice = itemSubtotals.reduce((prev, current) => prev + current, 0);
    setTotalPrice(newTotalPrice);

  }
  
  return (
    <Router>
      <div>
        <Navbar cartQty={cartQty} />
        <Switch>
          <Route exact path="/shopping-cart" component={Homepage} />
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/shop/:id">
            <Item handleAdd={addToCart} />  
          </Route>
          <Route exact path="/about" component={About} />
          
        </Switch>
        <Cart 
          cartItems={cartContents}
          handleQtyChange={changeItemQty}
          totalQty={cartQty}
          totalPrice={totalPrice}
          />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
