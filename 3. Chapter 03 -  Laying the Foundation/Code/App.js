import React from 'react';
import ReactDOM from 'react-dom/client';

// //React.createElement => Object => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   {id: 'heading'},
//   "Hello React"
// );

// console.log(heading);

// //Creating a react element by using JSX
// const jsxHeading = <h1>Hello JSX!!!</h1>

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);

//------------------------------------------------
const Title = () => (
    <h1 className='head' tabIndex="5">
        Hello React using JSX
    </h1>
);

const HeadingComponent = () => (
    <div id='container'>
        {/* Component composition */}
        <Title />
        <h1 className='heading'>Hello React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)