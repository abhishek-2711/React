import React from "react";
import ReactDOM from "react-dom/client";

// React element is not html element

// This is how we can create functional component.
// Component -> JS Function which returns JSX.

const TitleComponent = () => {
  return <h1>This is React Title Component</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <TitleComponent />
      <h1>This is React Functional component</h1>
    </div>
  );
};

const heading = React.createElement("h1", {}, "Hello React!");

const jsxHeading = <h1>Hello React using jsx</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
