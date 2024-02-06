import { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = () => {
    fetch("http://localhost:4000/playlists/all")
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      });
  };

  // Fetch all playlists
  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <main>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Spotify-like</span>
        </Link>

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
          <hr />
          <li>
            <Link to="new-playlist" className="nav-link text-white">
              ✚ New Playlist
            </Link>
          </li>
          <li>
            <Link to="new-song" className="nav-link text-white">
              ✚ New Song
            </Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
