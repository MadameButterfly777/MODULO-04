// 📝 Actividad 3:

// 🛠️ Consigna: 

// Crea un componente EstadoCarga que reciba loading:

// Si true → mostrar "Cargando...“
// Si false → mostrar "Datos listos“
// Usar operador ternario.

export const EstadoCarga = (props) => {
    const {loading} = props
    return(<>
        {loading ? "Datos listos" : "Cargando datos"}</>
    )
  
}
