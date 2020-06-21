import React from "react";

function Text({theme}) {
    console.log(theme)
    return(
      <h1 style = {{
         color: `${theme}`
      }}>{theme}</h1>
    );
    }

export default Text;
