const UncontrolledLogin  = () => {
    function handleLoginSubmit(event){
        event.preventDefault()

        const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const remember = event.target.elements.namedItem('remember').checked

        const data = {
            username,
            password,
            remember,
        }

        console.log(data)
    }
  return (
    <form onSubmit={handleLoginSubmit}>
        <h3>Uncontrolled Form</h3>
        <input name="username"/>
        <input name="password" type="password"/>
        <input name="remember"type="checkbox"/>
        <button>Login</button>
        <button type="reset">Reset</button>
    </form>
  )
}

export default UncontrolledLogin 