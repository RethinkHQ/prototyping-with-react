/* eslint-disable */
import React from 'react';

const Welcome = ({ name }) => {
  return <h3>Hello, {name}!</h3>;
};

Welcome.defaultProps = {
  name: 'Anonymous'
};

export default () => (
  <div>
    <Welcome name="Julie" />
    <Welcome name="Fred" />
    <Welcome name="Steph" />
    <Welcome />
  </div>
);
