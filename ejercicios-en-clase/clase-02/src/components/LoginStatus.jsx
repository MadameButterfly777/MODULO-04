 function LoginStatus({ isLoggedIn }) {
  return <>{isLoggedIn ? <p>You are logged in.</p> : <p>Access denied. Please log in.</p>}</>;
}
export default LoginStatus