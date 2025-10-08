import './App.css'
import Greeting from './components/greeting'
import { List } from './components/List'
import { Listas } from './components/TaskList'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Heather'
import Footer from './components/Footer'
import LoginStatus from './components/LoginStatus'





function App() {

  return (
    <>
      <Greeting/>
      <List/>
      <WelcomeMessage/>
      <UserProfile/>
      <Listas/>
      <Header/>
      <Footer/>
      <LoginStatus/>


      
    </>
  )
}

export default App
