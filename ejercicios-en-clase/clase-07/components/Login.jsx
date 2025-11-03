const Login = (props) => {
  const { userName, password, user, passwordLogin, setPasswordLogin, setUser } = props;

  const onLogin = (e) => {
    e.preventDefault();
    // acá decidís qué hacer: por ejemplo, si hay userName y passwordLogin, logueás:
    if (userName && passwordLogin) setUser(userName);
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <div>
          <label>Usuario</label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Ingrese su usuario"
            type="text"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
