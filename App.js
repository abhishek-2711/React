import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "temp" }, // attributes
  "Abhishek Rathod"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

const children = React.createElement("div", { id: "child" }, "Abhishek");
const children2 = React.createElement("div", { id: "child2" }, "children2");
const parent = React.createElement("div", { id: "parent" }, [
  children,
  children2,
]);

root.render(parent);

// how to create nested structure.
