
const Notifications = ({count}) => {
  return (
    
  <div>
    <h3>Notifications</h3>
    {count > 0 && <p> Tienes {count} mensajes </p>}
    {count <= 0  && <p>No tienes mensajes, loser</p>}
    {count > 20 && <p>No ghostees!!!</p>}
  </div>
      )
}

export default Notifications