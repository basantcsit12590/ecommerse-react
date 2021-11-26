import React from "react"
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductContextProvider from "./Global/ProductContext";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <div className="App">
     <ProductContextProvider>
     <CartContextProvider>
     <Router>
      <Navbar />
     
      <Switch>
           <Route path="/" exact component={Products} />
           <Route path="/cart" exact component={Cart} />
           <Route component={NotFound} />
      </Switch>

      </Router>
      </CartContextProvider>
       </ProductContextProvider>
    </div>
  );
}

export default App;
