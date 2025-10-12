
const Greeting = (props) => {
    const {name, data, age,} = props
    return (
        <>
        <p>Lunes {data.date}</p>
        <p>edad: {age}</p>
        
        
        <h1>{name} Bienvenidos a nuestra web</h1>

        </>
        
    )
}
export default Greeting