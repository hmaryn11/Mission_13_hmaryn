import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/movielist">
        {/* <Link to="/" className='navbar-brand'>JH Movie List</Link> */} _J H
        Movie List
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            {/* <Link to="/">Home</Link> */}
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            {/* <Link to="/podcast">Podcast</Link> */}
            <a className="nav-link" href="/podcast">
              Podcast
            </a>
          </li>
          <li class="nav-item">
            {/* <Link to="/movielist">Movie List</Link> */}
            <a className="nav-link" href="/movielist">
              Movie List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <div>
//         <Link to="/podcast">Podcast</Link>
//       </div>
//       <div>
//         <Link to="/movielist">Movie List</Link>
//       </div>
//     </nav>

// <div class>
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/podcast">Podcast</Link>
//   </li>
//   <li>
//     <Link to="/movielist">Movie List</Link>
//   </li>
// </ul>
// </div>
