import { useState } from "react"

export function Login(){
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


  return (
    <div>
        <h1>Login</h1>
        <input name='username' value={username} placeholder="Username" onChange={handleUsernameChange}/>
        <input name='password' value={password} type='password' placeholder="Password" onChange={handlePasswordChange}/>
        <input name="remember" type = "checkbox" checked={remember} onChange={handleRememberChange}/>
        <label for='remember'>Remember</label>
        {/* <button onClick={handleResetForm}>Reset</button> */}
    </div>
  )
}

