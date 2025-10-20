import { roles } from "../utils/constants"

export const CreateUser = (rol) => {
  return (
    <button>
         {rol === roles.ADMINISTRADOR && "CREAR USUARIO"}
         {rol === roles.MANAGER && "VER USUARIOS"}
    </button>
  )
}
//parte del Enum