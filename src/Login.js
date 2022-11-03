import React, { useState } from "react";

import '../src/css/header.css'
import Header from './Header';

import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg] = useState("");
  

  const handleLogin = async () => {
    if (!email || !password) {
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
    }).then(navigate("/dashboard")).catch();
  
  };}

  return (
    <>
    <Header profileIcon={false}/>
    <form>
    <div className="container">
   
      <div className="form input">
        <h1 className="h1">Login</h1>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn btn-dark butt" onClick={handleLogin}><b>Log In</b></button>
        <p><b>Don't have an account ?   <a href="http://localhost:3000/">Sign up</a></b></p>
      </div>
      <div className="msg">
        <h1>{msg}</h1>
      </div>
      
      
    </div></form></>
  );
}

export default Login;
