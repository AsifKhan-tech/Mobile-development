import { useState, useEffect } from "react";
import GitHubProfile from "./GitHubProfile";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </>
//   );
// }

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   function onToggleTheme() {
//     setDarkMode(!darkMode);
//     console.log(darkMode);
//   }

//   return (
//     <>
//       <button onClick={onToggleTheme}>Toggle theme</button>
//     </>
//   );
// }
// export default App;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function gitHubData() {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/users/AsifKhan-tech",
      );
      const data = await response.json();
      console.log("My profile:", data);

      setData(data);

      try {
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    gitHubData();
  }, []);

  return (
    <>
      <GitHubProfile data={data} isLoading={isLoading} />
    </>
  );
}

export default App;
