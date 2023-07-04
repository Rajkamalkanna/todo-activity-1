import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
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
      count: 0,
    };
  }
  increment = () => {
    //this don't recommented
    // this.setState({
    //   count: this.state.count + props.diff,
    // });
    this.setState((state, props) => {
      return {
        count: state.count + props.diff,
      };
    });
  };
  //this need
  decrement = () => {
    this.setState((state, props) => {
      return {
        count: state.count - props.diff,
      };
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}>+{this.props.diff}</button>
        <button onClick={this.decrement}>-{this.props.diff}</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Counter diff={1} />
        <Counter diff={10} />
        <Counter diff={100} />
      </>
    );
  }
}

// Container
// const rootElement = document.getElementById("root");

// Inject Translated React Code into Container of Index.html
// const root = createRoot(rootElement); // SetUp react-dom root
// root.render(<MyComponent />); // Actual Injection of component
// root.render(<App />); // Actual Injection of component
ReactDOM.render(<App />, document.querySelector("#root"));
