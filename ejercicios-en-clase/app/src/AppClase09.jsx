// import { FaReact } from "react-icons/fa";
import "../src/App.css"
import { FaMusic } from "react-icons/fa";
import SongForm from "../../clase-09/components/SongForm";
import { useState } from "react";
import SongLst from "../../clase-09/components/SongLst";




export const AppClase09 = () => {
 const initialSongs = JSON.parse(localStorage.getItem("songs")) || []

 const [songs, setSongs] = useState(initialSongs)

 const addSong = (newSong) =>{
  let data = [...songs, newSong]
  setSongs(data)
  saveLocalStorage(data)
  console.log(songs)
 }

const onDelete = (index) =>{
  const songsUpdated = songs.filter((_, i)=> i !== index)
  setSongs(songsUpdated)
}
 const saveLocalStorage = (data) => {
  localStorage.setItem("songs", JSON.stringify(data))
 }
 return (
    <div className="app-container">
        {/* <FaReact size={40} style={{ color: "#61dafb" }} />; */}
         <h1><FaMusic /> Mi playlist</h1>
         <SongForm addSong={addSong}/>
        {songs.length > 0 ? <SongLst songs={songs} onDelete={onDelete}/> : <p>No hay canciones todavia</p> }
         
    </div>
    
  )
}
