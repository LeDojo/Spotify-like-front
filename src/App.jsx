import { useEffect, useState } from "react";
import "./App.css";
import Playlist from "./pages/Playlist";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [playlists, setPlaylists] = useState([]);

  // Fetch all playlists
  useEffect(() => {
    fetch("http://localhost:4567/playlists/all")
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4567/songs/all")
      .then((res) => res.json())
      .then((data) => {
        // setSongs(data);
      });
  }, []);

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
          {playlists.map((playlist) => (
            <li key={playlist._id}>
              <Link
                to={`playlist/${playlist._id}`}
                className="nav-link text-white"
              >
                {playlist.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
