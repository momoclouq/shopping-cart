import React, {useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar from "./components/Navbar";
import Homepage from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId, name, quantity) => {
    if (quantity < 0) return false;

    //copy cart
    let fakeCart = [...cart];

    for(let i = 0; i < fakeCart.length; i++){
      if (fakeCart[i].productId == productId){
        fakeCart[i].quantity = quantity;
        setCart(fakeCart);
        return true;
      }
    }

    fakeCart.push({
      productId: productId,
      name: name,
      quantity: quantity
    });
    setCart(fakeCart);
    return true;
  }

  const removeFromCart = (productId) => {
    let fakeCart = [...cart];

    for(let i = 0; i < fakeCart.length; i++){
      if (fakeCart[i].productId === productId){
        fakeCart.splice(i, 1);
        setCart(fakeCart);
        return true;
      }
    }

    return false;
  }


  return (
    <Router>
      <Navbar quantity={cart.length}/>

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <Shop addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} removeFromCart={removeFromCart}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
