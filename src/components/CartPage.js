import React from 'react'

function CartPage(props) {
  const {cart } = props

    return(
      <div> 
        <h1>Cart page</h1>
        {JSON.stringify.cart}
        {cart.map((anObjectMapped, index) => {
          return (
              <p key={`${anObjectMapped.id}`}>
                  <span className="mr-2">{anObjectMapped.title}</span>
                  <button onClick = {props.removeItem} id={anObjectMapped.id}>Remove</button>
              </p>
          );
      })}
      </div>
    )
  }
export default CartPage;
