import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    console.log("button clicked!!");
    setInterval(() => {
      setValue((preVal) => preVal + 1);
      console.log("After setValue func, value: ", value);
    }, 2000);
  };

  useEffect(() => {
    console.log("Value: ", value);
  }, [value]);

  return (
    <div className="App">
      <div>Get update value: {value}</div>
      <br />
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}
