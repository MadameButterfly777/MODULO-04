import "./index.css"

const FormWithRef = () => {
    const nameRef = useRef(null)
  return (
    <section>
        <form className="grid">
            <label className="grid">Nombre 
                <input type="text" placeholder="Escribe tu nombre" className="input" />
            </label>
            <label className="grid">Email
                <input type="email" placeholder="Escribe tu email" className="input" />
            </label>
            <label className="grid">Rol 
                <select className="input">
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="design">Diseño</option>
                </select>
            </label>
        </form>
    </section>
  )
}
export default FormWithRef
