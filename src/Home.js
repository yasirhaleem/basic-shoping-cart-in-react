import React from 'react';
import Text from './Text'
import ParentComponent from './ParentComponent'
import Products from './components/Products'
import CartItems from './components/CartItems'

function App(props) {

  const {cart,addToCart,removeItem, theme,onClickHandler } = props

  return (
    <div className="container mx-auto">
      
                    <div className="flex">
                    <div className="w-full">
                  <Text theme= {theme} />
                  <h1 style={{
                    color: `${theme}`
                  }}>{theme}</h1>
                  <ParentComponent theme = {theme} count={cart ? cart.length : ''}/>

                  <button onClick = {onClickHandler} >Change theme</button>
                  <div className="flex">
                  <Products addToCart={addToCart} title="Nike Air" id="1"/>
                  <Products addToCart={addToCart} title="Adidas Air" id="2"/>
                  </div>
                </div>
                <div className="w-1/5">
                  <h3>Cart List</h3>
                {cart ? <CartItems removeItem={removeItem} cart={cart}/>:'' }
                  
                </div>
                </div>

    </div>
  );
}

export default App;
