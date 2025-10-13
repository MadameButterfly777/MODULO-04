// ejercicio 01
const InputE = ({placeholder= "Escribi en esta...", type = "text" }) => {
    return (
         <input
      placeholder={placeholder}
      type={type}
      style={{ padding: 10, borderRadius: 8, border: '1px solid #374151', background:'#0b1220', color:'#e5e7eb' }}
    />
    )
}
export default InputE