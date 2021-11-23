import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {CardProvider} from './context/CardContext'

function App() {
  return (
    <div className="App">
      <CardProvider>
        <Card/>
      </CardProvider>
    </div>
  );
}

export default App;
