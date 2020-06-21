import React from "react";
import Child from './Child'
const ParentComponent = (props) => (
    <div>
        <p>Parent ParentComponent data, rendering Child component <span  style={{
        color: `${props.theme}`
        }}>{props.theme} {props.count}</span></p>
        <Child theme = {props.theme} />
    </div>
  )

  export default ParentComponent;
