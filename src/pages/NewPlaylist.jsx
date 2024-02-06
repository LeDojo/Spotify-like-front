import { useState } from "react";

// A bootstrap form to create a new playlist
const NewPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");

  // Create a new playlist
  const createPlaylist = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/playlists/create-playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: playlistName,
        description: playlistDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

  return (
    <div className="container">
      <h1>New Playlist</h1>
      <form onSubmit={createPlaylist}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="My awesome playlist"
            value={playlistName}
            onChange={(e) => {
              setPlaylistName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="My awesome playlist description"
            value={playlistDescription}
            onChange={(e) => {
              setPlaylistDescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPlaylist;
