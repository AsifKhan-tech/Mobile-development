import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  function onToggleTheme(params) {
    setDarkMode(!darkMode);
  }
  return (
    <>
      {/* <main className="counter-app"> */}
      {/* <h1>{count}</h1> */}

      {/* <button className="count-button" onClick={() => setCount(count + 1)}>
         Click 
        </button> */}

      {/* </main> */}
      <h1>{darkMode}</h1>
      <button className="count-button" onClick={onToggleTheme}>
        toggle
      </button>
    </>
  );
}

export default App;
