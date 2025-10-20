

const Warning = (props) => {
    const {show} = props
    if (!show){
        return null
    }
  return (
    <p style={{color: "red"}}> ⚠ ADVERTENCIA!☣</p>
  )
}
 export default Warning