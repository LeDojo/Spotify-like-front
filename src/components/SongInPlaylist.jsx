const SongInPlaylist = ({
  id,
  title,
  fileUrl,
  handleDeleteSongFromPlaylist,
  handlePlaySong,
}) => {
  return (
    <li
      className="list-group-item"
      onClick={() => {
        handlePlaySong(fileUrl);
      }}
    >
      <div className="song">
        <span className="playButton">▶️</span>
        <span className="songName">{title}</span>
        <button
          onClick={() => {
            handleDeleteSongFromPlaylist(id);
          }}
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default SongInPlaylist;
