import React from 'react';
import './App.css';
import List from "./List";

function App() {
  return (
      <div>
        <h2>Films to watch</h2>
        <List films={['aaaa', 'vvv', 'csc']}/>
      </div>
  );
}

export default App;
