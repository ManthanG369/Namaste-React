import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object =HTMLElement(render)
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

// React functional component
const HeadingComponent = () => {
  return (
    <div className="Container">
      <Title />

      {Title()}
      <h1>Namaste from react functional components</h1>
    </div>
  );
};

console.log(Title);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
