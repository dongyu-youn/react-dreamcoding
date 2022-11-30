import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "동규";
  const list = ["우유", "딸기", "바나나"];
  return (
    <div className="App">
      <div>{name}</div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
