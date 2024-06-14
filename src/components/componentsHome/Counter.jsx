import { useState } from "react";

const Counter = () => {
  const[num, setNum] = useState(0)

  function increment(){
    setNum(num + 1)
  } 

  function decrement(){
    setNum(num - 1)
  }

  return (
    <>
    <h1>Количество {num}</h1>
    <button onClick={increment}>Прибавить</button>
    <button onClick={decrement}>Убавить</button>
    </>
  );
}

export default Counter;