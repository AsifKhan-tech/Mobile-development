import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchGitHubData() {
//       try {
//         setIsLoading(true);

//         const response = await fetch(
//           "https://api.github.com/users/AsifKhan-tech",
//         );

//         if (!response.ok) {
//           throw new Error(`Request failed with status ${response.status}`);
//         }

//         const githubData = await response.json();
//         setData(githubData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchGitHubData();
//   }, []);

//   if (isLoading) {
//     return (
//       <main className="github-page">
//         <div className="profile-card skeleton-card">
//           <div className="skeleton avatar-skeleton" />
//           <div className="skeleton line long" />
//           <div className="skeleton line" />
//           <div className="skeleton line short" />
//         </div>
//       </main>
//     );
//   }

//   if (!data) {
//     return (
//       <main className="github-page">
//         <div className="profile-card error-card">
//           <p>Unable to load GitHub profile.</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="github-page">
//       <section className="profile-card">
//         <div className="profile-header">
//           <img
//             className="avatar"
//             src={data.avatar_url}
//             alt={`${data.name || data.login}'s GitHub avatar`}
//           />

//           <div className="profile-meta">
//             <p className="eyebrow">Developer</p>
//             <h1>{data.name || data.login}</h1>
//             <a
//               href={data.html_url}
//               target="_blank"
//               rel="noreferrer"
//               className="username"
//             >
//               @{data.login}
//             </a>
//           </div>
//         </div>

//         <p className="bio">
//           {data.bio ||
//             "Building thoughtful interfaces and shipping clean experiences."}
//         </p>

//         <div className="stats">
//           <div className="stat-item">
//             <span className="stat-label">Public repos</span>
//             <strong>{data.public_repos}</strong>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Followers</span>
//             <strong>{data.followers}</strong>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Following</span>
//             <strong>{data.following}</strong>
//           </div>
//         </div>

//         <div className="details">
//           <span>Location: {data.location || "Remote"}</span>
//           <span>Company: {data.company || "Independent"}</span>
//           <span>Blog: {data.blog ? data.blog : "Not available"}</span>
//         </div>
//       </section>
//     </main>
//   );
// }

// function App() {
//   const handleClick = (e) => {
//     console.log(e);
//   };
//   return (
//     <>
//       <h1>Event in react</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio
//         excepturi ratione magnam quos dignissimos, aliquid saepe deserunt odit
//         eos tempore vitae ad facilis reprehenderit aliquam quaerat, eligendi
//         architecto hic.
//       </p>

//       <button onClick={handleClick}>Click</button>
//     </>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button>Click</button>

//       <p>Hello {name}</p>
//     </>
//   );
// }

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default App;
