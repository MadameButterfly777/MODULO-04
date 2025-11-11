import style from "./Buttons.module.css"
import "./Button.css"

const ButtonGroup = () => {
  return (
   <div>
     <button className="button1">Button 1 con css</button>

     <button className={style.btn1}>Button 1 con css-modules</button>
   </div>
  )
}

export default ButtonGroup