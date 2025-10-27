import { useState } from "react"
import "./index.css"

const TodoList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const addTaks = (e) => {
        e.preventDefault()
        if (task.trim()){
        setTasks([...tasks, task])
        setTask("")
        }
        
    }
    return (
    <div className="section">
        <h1>Lista de tareas</h1>
        <form onSubmit={addTaks} className="grid">
            <input type="text" placeholder="Ingrese una tarea..." className="input" value={task} onChange={(e)=> setTask(e.target.value)}></input>
            <button type="submit" className="button">Agregar</button>
            <ul className="list">
                {tasks.map(task => <li key={task}>{task}</li>)}
            </ul>

        </form>
    </div>
  )
}
export default TodoList
