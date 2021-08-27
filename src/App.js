import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Item from './components/Item';
import About from './components/About';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const [cartQty, setCartQty] = useState(0);
  const [cartContents, setCartContents] = useState([]);

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
  }
  
  return (
    <Router>
      <div>
        <Navbar cartQty={cartQty} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/shop/:id">
            <Item handleAdd={addToCart} />  
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/cart">
            <Cart cartItems={cartContents} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
