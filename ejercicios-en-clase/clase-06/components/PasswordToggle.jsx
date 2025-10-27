import { useState } from "react"
import "./index.css"
const PasswordToggle = () => {
    const [show, setShow] = useState(false)
  return (
    
    <section className="section">
        <h3>6) Toggle de Contraseña</h3>
        <div className="grid">
            <label htmlFor="password">Contraseña</label>
            <div className="label">
            {/*Campo de entrada para la contraseña*/}
            <input id="password" type={show ? "input" : "password"} placeholder="Ingrese su contraseña" className="input"></input>
            {/* boton pars alterar la visibilidad de la contraseña */}
            <button type="button" className="button" onClick={() => {console.log(!show) 
                setShow(!show)}}>{show ? "Ocultar"  : "Mostrar"}</button>
            </div>
        </div>

    </section>
  )
}

export default PasswordToggle