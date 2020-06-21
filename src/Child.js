import React from "react";
import Grandchild from './Grandchild'
const Child = (props) => (
    <div>
        <p>Child component data, rendering grandchild <span style={{
        color: `${props.theme}`
     }}>{props.theme}</span></p>
        <Grandchild theme = {props.theme} />
    </div>
    )

export default Child;