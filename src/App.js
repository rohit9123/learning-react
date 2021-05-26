import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "adopt me!"),
//     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "havanse" }),
//     React.createElement(Pet, {
//       name: "pagal",
//       animal: "Dog",
//       breed: "havanse",
//     }),
//     React.createElement(Pet, {
//       name: "Kumar",
//       animal: "Dog",
//       breed: "havanse",
//     }),
//   ]);
// };
const App = () => {
  return (
    <div>
      <h1>Adopt ME!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="havanse" />
      <Pet name="Luna" animal="Dog" breed="havanse" />
      <Pet name="Luna" animal="Dog" breed="havanse" /> */}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
