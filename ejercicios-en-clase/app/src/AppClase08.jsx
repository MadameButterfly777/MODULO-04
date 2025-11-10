// import ButtonGroup from "./assets/buttons/ButtonGroup"
// import ButtonModule from "./assets/buttons/ButtonModule"

import { useState } from "react"
import "../../clase-08/components/App.css";
import CosteHotel from "../../clase-08/components/CosteHotel";
import CosteAlquiler from "../../clase-08/components/CosteAlquiler";


const AppClase08 = () => {
  const [night, setNight] = useState(0)

  const handleNight = (e) => {
    setNight(e.target.value)
  }

  return (
    <div>
      <h1 className="prueba">Calculadora de costos de viaje</h1>
      <div>
        <label htmlFor="night">Cantidad de noches</label>
        <input value={night} onChange={handleNight} placeholder="Introduce la cantidad de noches" />
      </div>
      <CosteHotel night={night}/>
      <CosteAlquiler night = {night}/>
      {/* <ButtonGroup/>
      <ButtonModule/> */}
    </div>
  )
}

export default AppClase08