import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  async function greet() {
    const message = await invoke("greet", { name });
    setGreeting(message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World! from Tauri</h1>
      </header>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={greet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
