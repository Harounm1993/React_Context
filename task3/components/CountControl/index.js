import React from "react";

function CountControl() {
  return (
    <div>
      <button onClick={() => console.log("I should add to count!")}>
        Add to count!
      </button>
    </div>
  );
}
export default CountControl;
