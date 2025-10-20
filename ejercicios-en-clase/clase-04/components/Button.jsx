
const Button = ({issLoggedIn}) => {
  return (
    <button>
        {issLoggedIn ?  
        "Cerrar sesion" :  "Iniciar sesion" }
    </button>
  )
}
export default Button