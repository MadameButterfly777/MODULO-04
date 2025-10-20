// 📝 Actividad 1:

// 🛠️ Consigna: 

// Crea un componente LoginStatus que reciba la prop isLoggedIn:

// Si está logueado → mostrar "Bienvenido".
// Si no → mostrar "Debes iniciar sesión".
// Usar if/else.

const LoginStatus =  ({name, issLoggedIn}) => {
    
    // return (
    //     <div>
    //         Bienvenid@s {name}
    //     </div>
    // )
     if (issLoggedIn){
         return ( 
         <div> Bienvenida a Ada {name}</div>
         )
     }return <p> Por favor inicia sesion </p>

    
}
export default LoginStatus