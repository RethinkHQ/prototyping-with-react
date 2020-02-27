/* eslint-disable */
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Clicks: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
      <button onClick={() => setCount(count + 5)}>
        Add 5
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};
