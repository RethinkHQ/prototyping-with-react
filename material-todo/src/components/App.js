import React from "react";

/**
 * The root component for the todo application
 */
const App = () => {
  return (
    <div>
      <input />
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Eggs
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Bacon
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Coffee
          </label>
        </li>
      </ul>
      <button>Remove</button>
    </div>
  );
};

export default App;
