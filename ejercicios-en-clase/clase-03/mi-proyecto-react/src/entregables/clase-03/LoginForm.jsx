import CardE from "./Carde"
import InputE from "./InputE"
import { ButtonE } from "./ButtonE"

const LoginForm = () => (
    <CardE>
        <h2 style={{ margin: 0 }}> Me guuuusssstaaa el arrrte</h2>
        <input placeholder="Email" type="email" />
        <input placeholder="Contraseña" type="password" />
        <ButtonE/>
    </CardE>
)

export default LoginForm