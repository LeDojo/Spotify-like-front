import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("All songs");
  const [playlistId, setPlaylistId] = useState("");

  const fetchPlaylist = (playlistId) => {
    fetch(`http://localhost:4567/playlists/${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylistId(data._id);
        setPlaylistTitle(data.title);
        setSongs(data.songs);
      });
  };

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
        setSongs(data);
      });
  }, []);

  const onPlaylistClick = (playlistId) => {
    fetchPlaylist(playlistId);
  };

  const handleDeleteSongFromPlaylist = (songId) => {
    fetch(
      `http://localhost:4567/playlists/${playlistId}/delete-song/${songId}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetchPlaylist(playlistId);
      });
  };

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
            <li
              key={playlist._id}
              onClick={() => {
                onPlaylistClick(playlist._id);
              }}
            >
              <a href="#" className="nav-link text-white">
                {playlist.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <h1>{playlistTitle}</h1>
        <ul className="list-group">
          {songs.map((song) => (
            <li key={song._id} className="list-group-item">
              <div className="song">
                <span className="songName">{song.title}</span>
                <button
                  onClick={() => {
                    handleDeleteSongFromPlaylist(song._id);
                  }}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
