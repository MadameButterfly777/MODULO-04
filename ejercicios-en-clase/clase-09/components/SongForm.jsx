import { useState } from "react"


const SongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !artist.trim()) return;

    const newSong = { title, artist };
    addSong(newSong);

    setTitle("");
    setArtist("");
  };

  return (
    <form className="song-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la canción"
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artista"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default SongForm;
