// how we can create h1 tag in react.
// below code will return you an object.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "temp" }, // attributes
  "Abhishek Rathod"
);
console.log(heading);
// React.createElement gives us react element not html element , it's an object.

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method is convert the object into h1 element.
const children = React.createElement("div", { id: "child" }, "children");
const children2 = React.createElement("div", { id: "child2" }, "children2");
const parent = React.createElement("div", { id: "parent" }, [
  children,
  children2,
]);

root.render(parent);

// how to create nested structure.
