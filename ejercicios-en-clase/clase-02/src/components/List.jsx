const numbers = [  1, 22, 44, 55, 666]


export const List = () => {
    return (
        <ul>
         {numbers.map((number) => ( 
            <li>{number}</li>)
        )}
        </ul>
    )
}