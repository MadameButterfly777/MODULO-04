import ControlledTextBase from "../../clase-06/components/ControlledTextBase"
import FormNoCtr from "../../clase-06/components/FormNoCtr"
import LiveFilterListBase from "../../clase-06/components/LiveFilterListBase"
import PasswordToggle from "../../clase-06/components/PasswordToggle"
import SkillschecklistBase from "../../clase-06/components/SkillschecklistBase"
import TodoList from "../../clase-06/components/TodoList"

export const AppClase06 = () => {
  return (
    <div className="wrapper">
      <h1>🚀 Practica de React - Componentes Base </h1>
      <PasswordToggle/>
      <LiveFilterListBase/>
      <ControlledTextBase/>
      <FormNoCtr/>
      <SkillschecklistBase/>
      <TodoList/>
    </div>
  )
}
