import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  function onToggleTheme() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    console.log("Effect is running...");
  }, [count]);

  return (
    <>
      {/* <main className="counter-app"> */}
      {/* <h1>{count}</h1> */}

      {/* <button className="count-button" onClick={() => setCount(count + 1)}>
         Click 
        </button> */}

      {/* </main> */}

      <main
        style={{
          minHeight: "100vh",
          backgroundColor: darkMode ? "#000" : "#fff",
        }}
      >
        <h1>{darkMode}</h1>
        <button className="count-button" onClick={onToggleTheme}>
          toggle
        </button>

        <h2>{count}</h2>
        <button className="count-button" onClick={() => setCount(count + 1)}>
          Click
        </button>
      </main>
    </>
  );
}

export default App;
