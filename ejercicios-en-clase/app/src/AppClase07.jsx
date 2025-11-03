import { useState } from "react"
import Login from "../../clase-07/components/Login"
import { Register } from "../../clase-07/components/Register"
import { WelcomeMessage } from "../../clase-07/components/WelcomeMessage"
import SimpleFormBase from "../../clase-07/components/SimpleFormBase"


export const AppClase07 = () => {

const [user, setUser ] = useState("")
const [passwordLogin, setPasswordLogin] = useState("")    
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
const [confirmPasword, setConfirmPassword] = useState("")   

  return (
    <div>
       {!user && <Register 
       userName={userName} 
       password={password} 
       confirmPasword={confirmPasword} 
        setConfirmPassword={setConfirmPassword}
         setPassword={setPassword} 
         setUserName={setUserName} />}

        <Login 
         userName={userName} 
         password={password} 
         user={user}
          passwordLogin={passwordLogin}
           setUser={setUser} 
           setPasswordLogin={setPasswordLogin} />

        <WelcomeMessage
         user={user} 
         setUser={setUser}
          setPasswordLogin={setPasswordLogin} />
          <SimpleFormBase/>
    </div>
  )
}
