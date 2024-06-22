// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

const parent = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am from h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am from h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ])
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
