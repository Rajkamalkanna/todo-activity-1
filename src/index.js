import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// Class Based React Component
// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2> Hello World </h2>
//       </div>
//     );
//   }
// }
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    //this don't recommented
    this.setState({
      count: this.state.count + 1
    });
  };
  //this need
  decrement = () => {
    this.setState((currState, currProp) => {
      return {
        count: currState.count - 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

// Container
const rootElement = document.getElementById("root");

// Inject Translated React Code into Container of Index.html
const root = createRoot(rootElement); // SetUp react-dom root
// root.render(<MyComponent />); // Actual Injection of component
root.render(<Counter />); // Actual Injection of component
