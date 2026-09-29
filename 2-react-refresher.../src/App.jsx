import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-app">
      <h1>{count}</h1>
      <button className="count-button" onClick={() => setCount(count + 1)}>
        Click
      </button>
    </main>
  );
}

export default App;
