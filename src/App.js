import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas.js'

function App() {
  return (
    <div className="App">
      <Canvas width={800} height={400} />
    </div>
  );
}

export default App;
