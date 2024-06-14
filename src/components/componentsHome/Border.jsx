import { useState } from "react";

const Border = () => {
    const [value, setValue] =useState('TEXT')

    return (
      <>
      <h1>{value}</h1>
      <input type = "text"
      value={value}
      onChange={event => setValue(event.target.value)}
  
      ></input>
      </>
    );
}
  export default Border;