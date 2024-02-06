import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongInPlaylist from "../components/SongInPlaylist";

function Playlist() {
  const [playlistTitle, setPlaylistTitle] = useState("All songs");
  const [songs, setSongs] = useState([]);
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
  }, [playlistId]);

  const fetchPlaylist = (playlistId) => {
    fetch(`http://localhost:4000/playlists/${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylistTitle(data.title);
        setSongs(data.songs);
      });
  };

  const handleDeleteSongFromPlaylist = (songId) => {
    fetch(
      `http://localhost:4000/playlists/${playlistId}/delete-song/${songId}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then(() => {
        fetchPlaylist(playlistId);
      });
  };

  const handlePlaySong = (fileUrl) => {
    if (fileUrl.substring(0, 4) !== "http") {
      fileUrl = `http://localhost:4000/audio/${fileUrl}`;
    }
    const audio = new Audio(fileUrl);
    audio.play();
  };

  return (
    <div className="container">
      <h1>{playlistTitle}</h1>
      <ul className="list-group">
        {songs.map((song) => (
          <SongInPlaylist
            key={song._id}
            id={song._id}
            title={song.title}
            fileUrl={song.fileUrl}
            handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
            handlePlaySong={handlePlaySong}
          />
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
