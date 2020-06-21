import React,{useState} from "react"
import Home from './Home'
import About from './components/About'
import Users from './components/Users'
import Nav from './components/Nav'
import CartPage from './components/CartPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  
  const [theme, setTheme] = useState("blue");
  const [Cart, setCart] = useState({
                          ProductsList: []
                        });

  const addToCart = (e) => {
    const listing = Cart.ProductsList
    listing.push({
      id: e.target.id,
      title: e.target.title,
      quantity: 1
    })

    setCart({...Cart, listing});


  }
  
  const removeItem =(e) =>{
    const listing = Cart.ProductsList
    const newCart = listing.filter(x => x.id !== e.target.id )
    setCart({...Cart, ProductsList: newCart});
    console.log(Cart)
  }
  const onClickHandler = () => {
      setTheme( theme === "red"? "blue": "red");
    }

  return (
    <div className="container mx-auto">

    <Router>
      <div>
        <Nav theme={theme} count={Cart.ProductsList.length}/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/cart">
            <CartPage cart={Cart.ProductsList} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home cart={Cart.ProductsList} addToCart={addToCart} removeItem={removeItem} theme={theme} onClickHandler={onClickHandler} />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}



