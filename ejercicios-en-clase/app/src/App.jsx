import Button from "../../clase-04/components/Button"
import { ByeBye } from "../../clase-04/components/ByeBye"
import Hello from "../../clase-04/components/Hello"
import LoginStatus from "../../clase-04/components/LoginStatus"
import Notifications from "../../clase-04/components/Notifications"
import Warning from "../../clase-04/components/Warning"
import { Roles } from "../../clase-04/components/Roles"
import { CreateUser } from "../../clase-04/components/CreateUser"
import { Mensajes } from "../../clase-04/components/Mensajes"
import { Notificaciones } from "../../clase-04/components/Notificaciones"
import { EstadoCarga } from "../../clase-04/components/EstadoCarga"

const user = {
  name: "Georgina", 
  issLoggedIn : false,
  rol: "admin"
  // rol: "user"
  // rol: "manager"
}
const data = true
function App() {
  
  return (
    <>
    <EstadoCarga loading = {false}/>
    {!data ? (<p>cargando...</p> ) : (<div>
      <LoginStatus name= {user.name} issLoggedIn= {user.issLoggedIn}/>
    <Warning  show= {true}/>
    {user.issLoggedIn? <Hello/> : <ByeBye/>  }
    <Button issLoggedIn={user.issLoggedIn} />
    <Notifications count={21}/>
    <Notificaciones count={7}/>
    <Mensajes  message ={false}/>
     </div>) 
    }
     <div> 
      <Roles rol= {user.rol} />
      <CreateUser rol= {user.rol}/>
     </div>

     </>
  )
}

export default App
