const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "havanse" }),
    React.createElement(Pet, {
      name: "pagal",
      animal: "Dog",
      breed: "havanse",
    }),
    React.createElement(Pet, {
      name: "Kumar",
      animal: "Dog",
      breed: "havanse",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
