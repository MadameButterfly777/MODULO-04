import "./index.css"


const FormNoCtr = () => {
  return (
    <section className="section">
        <h3>8) Formulario NO Controlado</h3>
        <form onSubmit={(e) => {e.preventDefault()
             console.log({"nombre" : e.target.nombre.value, "apellido" : e.target.apellido.value})}} className="grid">
              
            <label className="grid">Nombre<input id="nombre" type="text" name="nombre" placeholder="Escribe tu nombre" className="input" autoComplete="off" /></label>

            <label className="grid"> Apellido <input id="apellido" type="text" placeholder="Escribe tu apellido" autoComplete="off" /></label>

            <button type="submit"> Enviar</button>
        </form>
    </section>
  )
}
export  default FormNoCtr