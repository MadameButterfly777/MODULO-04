import { use, useState } from "react"
import "./index.css"

const initialUsers = [
{id: 1, name:"Ana Garcia", role:"Frontend"},
{id: 2, name:"Luis Perez", role: "Backend"},
{id: 3, name:"Maria Lopez", role:"Diseño"},
{id: 4, name:"Carlos Ruiz", role:"QA"},
    
]

const LiveFilterListBase = () => {
    const [value, setValue] = useState("")
    const query = value.trim().toLowerCase()
    const filtered = !query ? initialUsers : initialUsers.filter((user)=> user.name.toLowerCase().includes(query) || user.role.toLowerCase().includes(query))
  return (
    <section className="section">
        <h3>3) Filtro en vivo</h3>
        <input type="text" value={value} placeholder="Buscar por nombr o por rol" className="input" onChange={(e)=>setValue(e.target.value)}></input>
        <ul className="list">
            {filtered.map(u => (
                <li key={u.id}>
                    {u.name} - <em>{u.role}</em>
                </li>
            ))}
        </ul>
        <p>Total; {initialUsers.length}</p>
    </section>
  )
}

export default LiveFilterListBase