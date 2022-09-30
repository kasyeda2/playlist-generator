import logo from './spotify.png';
import './App.css';

import { useState } from "react";
import ReactDOM from 'react-dom/client';


function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <p>
          Spotify Playlist Generator
        </p>
        <a
          className="App-link"
          href="https://spotify.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse Music on Spotify
        </a>
        <label>Friend #1's Favorite Song:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Friend #2's Favorite Song:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button>Generate</button>
      
      </header>
    </div>
  );
}

export default App;
