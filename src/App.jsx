import * as React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Spotify-like</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Customers
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            An active item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </main>
  );
}

export default App;
