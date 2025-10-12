import './App.css'
import { Button } from './components/Button'
import Greeting from './components/Greeting'
import Layout from './components/Layout'


//const name = "Georgina" 

const data = {
  dni: 39777297,
  date: "10-07-1989"
}
function App() {
  
  return (
    <Layout>
      <Greeting data= {data} name= {"Georgina"} age= {36}/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      {/*/cancelar rojo/ */}
      <Button Text='Cancelar' color='red'/>
    </Layout>
  )
}

export default App
