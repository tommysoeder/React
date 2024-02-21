import { useState } from "react"

export function Login({onLogin}){
    const [username, setUsername]=useState('');
    const [password, setPassword]= useState('');
    const [remember, setRemember]= useState(false);

    function handleUsernameChange(event){ 
        setUsername(event.target.value);
    };



    function handlePasswordChange(event){ 
      setPassword(event.target.value);
    };

  function handleRememberChange(event){ 
    setRemember(event.target.checked);
    };

    const handleLogin = (event) => {
      event.preventDefault();
      if (username && password) {
        onLogin({ username, password });
      }
    };
  
    const isLoginDisabled = !username || !password;

    const handleResetClick = () => {
      setUsername('');
      setPassword('');
      setRemember(false);
    };

  return (
    <div>
        <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <input name='username' type="text" value={username} placeholder="Username" onChange={handleUsernameChange}/>
            <input name='password' value={password} type='password' placeholder="Password" onChange={handlePasswordChange}/>
            <input name="remember" type = "checkbox" checked={remember} onChange={handleRememberChange}/>
            <label for='remember'>Remember</label>
            <button type="submit"  disabled={isLoginDisabled}>Login</button>
            <button type='button' onClick={handleResetClick}>Reset</button>
            </form>
    </div>
  )
}

