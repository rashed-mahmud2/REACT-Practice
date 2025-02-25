import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import BioData from "./components/BioData";

// re-rendering of react;
function App() {
  console.log("i am called");
  const [dynamicCounter, setDynamicCounter] = useState(20);
  const [dynamicCounter2, setDynamicCounter2] = useState(30);

  const increaseHandler = () => {
    setDynamicCounter(dynamicCounter + 1);
  };

  const decreaseHandler = () => {
    setDynamicCounter(dynamicCounter - 1);
  };

  const increaseHandler2 = () => {
    setDynamicCounter2(dynamicCounter2 + 1);
  };

  const decreaseHandler2 = () => {
    setDynamicCounter2(dynamicCounter2 - 1);
  };

  return (
    <div className="App">
      <div className="counter-app">
        <p>The value of the counter is {dynamicCounter}</p>
        <button onClick={increaseHandler}>Increase By 1</button>
        <button onClick={decreaseHandler}>Decrease By 1</button>
      </div>
      <div className="counter-app2">
        <p>The value of the counter is {dynamicCounter2}</p>
        <button onClick={increaseHandler2}>Increase By 1</button>
        <button onClick={decreaseHandler2}>Decrease By 1</button>
      </div>
    </div>
  );
}

export default App;
