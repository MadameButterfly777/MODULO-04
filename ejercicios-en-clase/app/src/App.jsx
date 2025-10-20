// import Button from "../../clase-04/components/Button"
// import { ByeBye } from "../../clase-04/components/ByeBye"
// import Hello from "../../clase-04/components/Hello"
// import LoginStatus from "../../clase-04/components/LoginStatus"
// import Notifications from "../../clase-04/components/Notifications"
// import Warning from "../../clase-04/components/Warning"
// import { Roles } from "../../clase-04/components/Roles"
// import { CreateUser } from "../../clase-04/components/CreateUser"
// import { Mensajes } from "../../clase-04/components/Mensajes"
// import { Notificaciones } from "../../clase-04/components/Notificaciones"
//  import { EstadoCarga } from "../../clase-04/components/EstadoCarga"
import {users} from "../../clase-05/components/utils/data";
import { useState } from "react";
import List from "../../clase-05/components/List"


// const user = {
//   name: "Georgina", 
//   issLoggedIn : false,
//   rol: "admin"
//   // rol: "user"
//   // rol: "manager"
// }
// const data = true

function App() {
  const [count, setCount] = useState(0);

  // FILTRO 
  //const ActiveUsers = users.filter(user => user.isActive);

  return (
    <>
      {/* Contador */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <h2>Contador</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <button onClick={() => setCount(count + 1)}>+</button>
          <p>{count}</p>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>

      {/* 
      <EstadoCarga loading={false} />
      {!data ? (<p>cargando...</p>) : (
        <div>
          <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn} />
          <Warning show={true} />
          {user.isLoggedIn ? <Hello /> : <ByeBye />}
          <Button isLoggedIn={user.isLoggedIn} />
          <Notifications count={21} />
          <Notificaciones count={7} />
          <Mensajes message={false} />
        </div>
      )}
      */}

      {/* Bloque de roles  */}
      {/* 
      <div>
        <Roles rol={user.rol} />
        <CreateUser rol={user.rol} />
      </div>
      */}

      {/* FILTRO */}
      <div style={styles.wrapper}>
        <h1>Gestion de Usuarios</h1>
        
        {/* <List title="Todos los usuarios" users={users} />
        <hr />
        <List title="Usuarios activos" users={ActiveUsers} /> */}
      </div>
    </>
  );
}
   const styles = {
      wrapper: {
       padding: "20px",
       textAlign : "center"
      } ,
      filterBtn: {
       backgroung : "2ecc71",
       color : "fff",
       border: "none",
       padding: "10px 16px",
     cursor: "pointer",
     boerderRadius: "8px",
     fontSize: "14px",
     marginBottom: "10px"
     }
     }


export default App
