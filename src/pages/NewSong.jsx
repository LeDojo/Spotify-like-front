import { useEffect, useState } from "react";

// A bootstrap form to create a new playlist
const NewSong = () => {
  const [playlists, setPlaylists] = useState([]);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [playlistId, setPlaylistId] = useState("");
  const [file, setFile] = useState(null);

  // Get the list of playlists
  useEffect(() => {
    fetch("http://localhost:4000/playlists/all")
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      });
  }, []);

  // Create a new playlist
  const createSong = (e) => {
    e.preventDefault();

    // When you have a file in your form, you need to use FormData
    // Create a MultiPart form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("genre", genre);
    formData.append("playlistId", playlistId);
    formData.append("audioFile", file);

    fetch("http://localhost:4000/songs/add-song", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <h1>New Song</h1>
      <form onSubmit={createSong}>
        <div className="mb-3">
          <label htmlFor="playlist" className="form-label">
            Playlist
          </label>

          <select
            className="form-select"
            id="playlist"
            value={playlistId}
            onChange={(e) => {
              setPlaylistId(e.target.value);
            }}
          >
            <option value="">Select a playlist</option>
            {playlists.map((playlist) => (
              <option key={playlist._id} value={playlist._id}>
                {playlist.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Song title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="artist" className="form-label">
            Artist
          </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            placeholder="Song artist"
            value={artist}
            onChange={(e) => {
              setArtist(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Song genre"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">
            File
          </label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
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

export default NewSong;
