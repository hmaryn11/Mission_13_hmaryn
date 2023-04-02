import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <ul>
        <il>
          <Link to="/">Home</Link>
        </il>
        <li>
          <Link to="/podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/movielist">Movie List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
