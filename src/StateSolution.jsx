/* 

1. Ha all kod skriven från början.
Starta med att visa appen med State först (SKRIV IN DETTA SOM START I LEKTIONENS KOD)


*/

import { useState } from "react";

export default function StateSolution() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <main className="App" style={{ color: color ? "#FFF" : "#FFF952" }}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br />
      <br />
      <p>{count}</p>
      <section>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setColor((prev) => !prev)}>Color</button>
      </section>
      <br />
      <br />
      <p>{userInput}</p>
    </main>
  );
}
