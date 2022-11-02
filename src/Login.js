import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  

  const handleLogin = async () => {
    if (!email && !password) {
      alert("email and pasword is required");
      return;
    } else {
      alert("Login successfully");
    
    await fetch("http://localhost:8000/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((val) => {
      setEmail("");
      setPassword("")
      setMsg(val.message);
      setTimeout(() => {
        setMsg();
      }, 3000)
      .then(navigate("/home"))
    })
      .catch();
  
  };}

  return (
    <div className="container">
      <div className="form">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLogin}>Log In</button>
      </div>
      <div className="msg">
        <h1>{msg}</h1>
      </div>
    </div>
  );
}

export default Login;
