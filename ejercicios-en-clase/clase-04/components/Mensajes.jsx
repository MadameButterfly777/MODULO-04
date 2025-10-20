// 📝 Actividad 4:

// 🛠️ Consigna: 

// Crea un componente Mensajes que reciba hayMensajes:

// Si es true → mostrar "Tienes nuevos mensajes".
// Si es false → no mostrar nada.
// Usar &&.

export const Mensajes = (props) => {
    const {message} = props
    if (!message){
        return null
    }
  return (
    <p style={{color: "red"}}> ⚠ ADVERTENCIA!☣</p>
  )
}
