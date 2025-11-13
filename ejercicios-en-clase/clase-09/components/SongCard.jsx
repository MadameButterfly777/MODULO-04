import { FaTrash, FaEdit, FaCheck } from "react-icons/fa"

const SongCard = ({song, onDelete, index}) => {
    const {title, artist} = song
  return (
    <li>
       <p>
        <strong>
        {title} </strong>{artist}
        </p> 
        <button onClick={()=> onDelete(index)} style={{backgroundColor:"red"}} > <FaTrash/> Eliminar</button>
    </li>
  )
}

export default SongCard