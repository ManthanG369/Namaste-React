const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react "
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am and H1 tag"),
    React.createElement("h2", {}, "I am and H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am and H1 tag"),
    React.createElement("h2", {}, "I am and H2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
