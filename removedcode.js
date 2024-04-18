const heading = React.createElement("h1", {}, "This is React Heading 🚀"); //Creating Element By using CORE React
console.log(heading);

//JSX is JavaScript Xtension (or) JavaScript Syntax, Note: JSX is not HTML, JSX is, HTML like syntax
const jsxHeading = <h1>This is React JSX Heading 🚀 </h1>; //Creating Element using JSX
console.log(jsxHeading);

//Creating Another Functional Components
const Title = () => {
  return <h1>Component Composition </h1>;
};

const element = <h1>Namaste Element in JSX🚀</h1>;

//React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {element}
      {100 + 110}
      <h1>Namaste React Functional Component 🚀</h1>
    </div>
  );
};

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
