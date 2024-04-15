const parent = React.createElement(
  "div",
  //This is the Parent Element
  { id: "parent", xyz: "abc" },
  React.createElement("div", { id: "chaild1" }, [
    // Writing siblings in Chaild1 Element
    React.createElement("h1", {}, "I'm am h1 tag"),
    React.createElement("h1", {}, "I'm am h1 tag"),
  ]),
  [
    React.createElement("div", { id: "chaild2" }, [
      // Writing siblings in Chaild2 Element
      React.createElement("h1", {}, "I'm am h1 tag"),
      React.createElement("h1", {}, "I'm am h1 tag"),
    ]),
  ],
  [
    React.createElement("div", {}, [
      React.createElement("p", {}, "Hey this is Paragraph"),
      React.createElement("h3", {}, "Hey this is Heading 3"),
    ]),
  ]
);
console.log(parent); // React Element creates a JavaScript Object, it is not HTML Tag.
const root3 = ReactDOM.createRoot(document.getElementById("root2"));
root3.render(parent);
