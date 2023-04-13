import logo from './logo.svg';
import './App.css';
import Carta from './components/Carta';
import React, { useState, useEffect } from "react";
/*
<Carta card_id={0} />
<Carta card_id={1} />
<Carta card_id={2} />
<Carta card_id={3} />
<Carta card_id={4} />
<Carta card_id={5} />
<Carta card_id={6} />
<Carta card_id={7} />
<Carta card_id={8} />

*/

function App() {

  return (
    <div className="App">
      <header className="App-header">

        

        <canvas id="obj1" class="touchable" width="200" height="200"></canvas>
        <canvas id="obj2" class="touchable" width="200" height="200"></canvas>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
