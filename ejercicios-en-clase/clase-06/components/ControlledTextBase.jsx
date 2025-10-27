import { useState } from "react"
import "./index.css"

const ControlledTextBase = () => {
    const [name, setName] = useState("")

  return (
    <section className="section"><h3>1) Texto controlado</h3>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Escribi tu nombre" className="input"></input>
    <p>Hola,  {name || "anonimo"} ❤!</p>
    </section>
  )
}

export default  ControlledTextBase