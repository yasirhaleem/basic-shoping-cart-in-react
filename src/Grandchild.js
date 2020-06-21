import React from "react";

const Grandchild = (props) => (
    <p>Theme: <span  style={{
        color: `${props.theme}`
     }}>{props.theme}</span></p>
    )

export default Grandchild;