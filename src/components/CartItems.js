import React from 'react'

function Cartitems(props){
    return(
        <div>
        {props.cart.map((anObjectMapped, index) => {
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

export default Cartitems