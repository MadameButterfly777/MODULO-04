import { useState } from "react"
import "../components/index.css"

const SimpleFormBase = () => {
    const [form, setForm] = useState({
        user: "", //se usa el mail del input
        email: "",
       
    })
const handleChange = (e) => {
    const{name, value} = e.target
    setForm((prev) => ({...prev, [name]:value}))}

  return (
    <section className="section">
        <h3>Formulario simple</h3>
        <form className="grid">
         <label className="grid">
               Nombre
            <input onChange={handleChange} value={form.user} type="text" name="user" className="input" />
         </label>
         <label className="grid">
            Email
            <input onChange={handleChange} value={form.email} type= "email" name="email" className="input" />
         </label>
         <label className="rol">
            Rol
            <select value={form.role} name="role" className="input">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="design">Diseño</option>
            </select>
         </label>
         <label className="label">
            <input value={form.active} type="checkbox" name="active" />
            Activo
         </label>
         <button type="submit" className="button">
            Enviar
         </button>
         </form>
    </section>
  )
}

export default SimpleFormBase