import { useState } from "react"
import "./index.css"
const allSkills = ["HTML", "CSS", "JavaScript", "React", "Node", "Diseño"]

const SkillschecklistBase = () => {
    const [selected, setSelected] = useState([])
    const Toggle = (skill) => {
        setSelected((prev)=> prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill])
    }

  return (
   <section className="section">
    <h3>4) Checklist de habilidades</h3>
    <div className="grid checklist-grid">
        {allSkills.map(skill => (
            <label key={skill} className="label">
                <input type="checkbox" value={selected.includes(skill)} onChange={()=> Toggle(skill)} />
                {skill}
            </label>
        ))}
    </div>
    <p>{selected.length}</p>
   </section>
  )
}
export default SkillschecklistBase
