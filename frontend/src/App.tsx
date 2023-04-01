import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movies';
import Podcast from './Podcast';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Movie />
      <Podcast />
    </div>
  );
}

export default App;
