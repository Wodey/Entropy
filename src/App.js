import React from 'react';
import "./scss/index.scss";
import Header from './components/Header.js';
import Home from "./components/Home.js";
import Show from "./components/Show.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Show />
    </div>
  );
}

export default App;
