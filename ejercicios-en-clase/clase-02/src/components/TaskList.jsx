const TaskList = [13, 7, 17, 25 , 11]

export const Listas = () => {
    return(
       <ul>
         {TaskList.map((lista) => (
            <li>{lista}</li>
        ))}
       </ul>
    )
}