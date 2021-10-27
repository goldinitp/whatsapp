import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ padding: 10, fontSize: 16 }}
        />
        <a
          className="App-link"
          href={`http://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 20, textDecoration: "none" }}
        >
          Chat
        </a>
      </header>
    </div>
  );
}

export default App;
