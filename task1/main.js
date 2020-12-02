import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const NameContext = createContext("World");

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="whats ya name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <NameContext.Provider value={name}>
        <Child></Child>
      </NameContext.Provider>
    </>
  );
}

function Child() {
  return <Grandchild></Grandchild>;
}

function Grandchild() {
  return <GreatGrandchild></GreatGrandchild>;
}

function GreatGrandchild() {
  const name = useContext(NameContext);
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
