import SongCard from "./SongCard"


const SongLst = ({songs, onDelete}) => {
  return (
    <ul className="song-list">
       {songs.map((song, index)=>  <SongCard key={index} song={song} index={index} onDelete={onDelete}/>)} 
    </ul>
  )
}

export default SongLst