
import React, { useState } from "react";
import './../styles/App.css';
//import { event } from "cypress/types/jquery";
import Child from "./Child";

function App  ()  {
  const [ inputValue,setName] = useState("");
  const handleInput = (event)=> {
    setName(event.target.value);
  };
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        {inputValue}
        <Child

        inputValue={inputValue}
        handleInput={handleInput}
        />
    </div>
  );
}

export default App
