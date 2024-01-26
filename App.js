import React from "react";
import ReactDOM from "react-dom/client";

// React element using JSX.

// jsx => babel  transpiles it to React.CreateElement => ReactElement -> js Object => Html element (render)
const TitleComponent = () => {
  return (
    <h1 id="heading" className="heading">
      Namaste React using JSX 🚀
    </h1>
  );
};

const title = <h1>Title : React element</h1>;

const number = 1000;
const HeadingComponent = () => {
  return (
    <div className="container">
      <TitleComponent />
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      {title}

      {console.log("console.log from jsx")}
      {number}
      <h1 id="heading">Namaste React Functional Component {number}</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
