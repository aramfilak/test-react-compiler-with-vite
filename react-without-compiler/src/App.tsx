import { useState } from "react";
import "./App.css";

function Counter({ name, counter }: { name: string; counter: number }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{counter}</h3>
    </>
  );
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div className='card'>
        <button onClick={() => setCount1((prv) => prv + 1)}>Counter 1</button>
        <Counter name='child 1' counter={count1} />

        <button onClick={() => setCount2((prv) => prv + 1)}>Counter 2</button>
        <Counter name='child 2' counter={count2} />
      </div>
    </>
  );
}

export default App;
