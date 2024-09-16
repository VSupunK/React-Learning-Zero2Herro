import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  {id: 'heading'},
  "Hello React"
);

console.log(heading);

//Creating a react element by using JSX
const jsxHeading = <h1>Hello JSX!!!</h1>

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
