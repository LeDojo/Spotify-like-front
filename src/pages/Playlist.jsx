import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Playlist() {
  const [playlistTitle, setPlaylistTitle] = useState("All songs");
  const [songs, setSongs] = useState([]);
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
  }, [playlistId]);

  const fetchPlaylist = (playlistId) => {
    fetch(`http://localhost:4567/playlists/${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylistTitle(data.title);
        setSongs(data.songs);
      });
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
    <>
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
    </>
  );
}

export default Playlist;
