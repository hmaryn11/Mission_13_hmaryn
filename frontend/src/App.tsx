import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './pages/Movie';
import Podcast from './pages/Podcast';
import Home from './pages/Home';

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
