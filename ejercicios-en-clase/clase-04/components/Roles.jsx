import { roles } from "../utils/constants"

export const Roles = ({rol}) => {
  return (
    <div>
        <h1>{rol === roles.ADMINISTRADOR && "AMINISTRADOR"}</h1>
        <h1>{rol === roles.USUARIO && "USUARIO"}</h1>
        <h1>{rol === roles.MANAGER && "MANAGER"}</h1>
    </div>
  )
}
