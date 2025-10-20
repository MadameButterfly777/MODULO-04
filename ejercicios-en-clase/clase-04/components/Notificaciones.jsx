// 📝 Actividad 2:

// 🛠️ Consigna: 

// Crea un componente Notificaciones que reciba cantidad:

// Si cantidad > 0 → mostrar "Tienes X notificaciones".
// Si no → no mostrar nada.
// Usar null.


export const Notificaciones = ({count}) => {
  return (
    <div>
        {count > 0 && <p>Tienes {count} notificaciones</p> } 
        {count === 0 && null}
    </div>
  )
}
