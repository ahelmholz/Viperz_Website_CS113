import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header whatever={'testing'} />
      <Banner/>
      <header className="App-header">
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
