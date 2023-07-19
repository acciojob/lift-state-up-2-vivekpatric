import React from "react";

function Child(props){


    return(
        <div className="child">
            <h1>Child Component</h1>
            <input 
              type="text" 
              value={props.inputValue} 
               onChange={props.handleInput}
            />
        </div>
    );
}
export default Child;