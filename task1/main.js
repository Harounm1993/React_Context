import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <Child name="Ben"></Child>;
}

function Child({ name }) {
  return <Grandchild name={name}></Grandchild>;
}

function Grandchild({ name }) {
  return <GreatGrandchild name={name}></GreatGrandchild>;
}

function GreatGrandchild({ name }) {
  return (
    <div style={{ width: "300px" }}>
      <h1>Hello {name}!</h1>
      <p>
        Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="norefferrer"
        >
          read more here
        </a>
        .
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
