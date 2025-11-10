import style  from "./components.module.css"

const coste = 140


const CosteHotel = ({night}) => {
    let costeTotal = coste*night
  return (
    <div >
        <h3 className={style.test}> Costo total de estadia</h3>
        <p>El costo totl de su estadia por {night} noches es:
            <span style={{color: "red"}}>{costeTotal}</span>
        </p>

    </div>
  )
}

export default CosteHotel