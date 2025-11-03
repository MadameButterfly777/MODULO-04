


export const Register = (props) => {
 const {userName, password, confirmPasword, setConfirmPassword, setPassword, setUserName} = props   
 

const onRegister = (e) =>{
    e.preventDefault()
}
  return (
    <form onSubmit={onRegister}>
        <div>
            <label htmlFor="">Usuario</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Ingrese su usuario" type="text" />
        </div>
         <div>
            <label htmlFor="">Contraseña</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese su contraseña" type="password" />
        </div>
         <div>
            <label htmlFor="">Confirmar contraseña</label>
            <input value={confirmPasword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirme su contraseña" type="password" />
        </div>
        <button type="submit">Registrarse</button>

    </form>
  )
}
