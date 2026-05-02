//import react
import React from "react";

//Import create root from react-dom
import { createRoot } from "react-dom/client";

//Import App component
import App from "./App";

//React compatiable code
const h1 = React.createElement("h1", null, "Hello from createElement");
const h2 = React.createElement(
  "h1",
  { id: "sub-head", className: "sub-title" },
  "Hello from createElement",
);

//create a root
createRoot(document.getElementById("root")).render(
  <>
    <h1>Hello world!</h1>
    <p className="para" id="p-para">
      This is paragraph
    </p>
    <App />
  </>,
);

/*
1-- render is to give control of DOM to react, so that it can create virtual DOM render is to give     control of DOM to react, so that it can create virtual DOM

2-- whatever you want to render, react doesn't understand this syntax - babel transpile it in react compatiable code
*/
