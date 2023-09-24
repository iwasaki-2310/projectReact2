// import { StrictMode } from "react";
import React from "react";
import ReactDom from "react-dom";

// import App from "./App";

// ReactDom.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById("root")
// );

const App = () => {
  return (
    <React.Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
