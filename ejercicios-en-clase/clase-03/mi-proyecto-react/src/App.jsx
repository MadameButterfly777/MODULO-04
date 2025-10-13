import './App.css'
import { ButtonE } from './entregables/clase-03/ButtonE'
import CardE from './entregables/clase-03/Carde'
import InputE from './entregables/clase-03/InputE'
// import { Button } from './components/Button'
// import Greeting from './components/Greeting'
//import Layout from './components/Layout'
import LayoutE from './entregables/clase-03/LayoutE'
import LoginForm from './entregables/clase-03/LoginForm'


//const name = "Georgina" 

// const data = {
//   dni: 39777297,
//   date: "10-07-1989"}
function App() {
  
  return (
    <div>
      {/* <Layout>
      <Greeting data= {data} name= {"Georgina"} age= {36}/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
     
      <Button Text='Cancelar' color='red'/>
    </Layout>  */}

    {/* ejercicio 01 */}
    <LayoutE>
      {/* ejercicio-03 */}
        <CardE>
             <h1>hola pianolaaaa</h1>
        </CardE>
        <InputE/>
        <ButtonE/>
        {/* ejercicio 04 */}
        <div  style={{ minHeight: '100vh', display:'grid', placeItems:'center' }}>
          <LoginForm/>
        </div>
    </LayoutE>
    </div>
    
  )
}

export default App
