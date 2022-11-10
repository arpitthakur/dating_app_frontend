import React, { useState } from "react";

import '../src/css/header.css'
import Header from './Header';

import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const handleLogin = async () => {
   


    if (!email || !password) 
    {

      if (emailRegex.test(email)&&passw.test(password)) {
        alert("correct")
      }
      else {
        alert("incorrect")
      }}


   

    else {
     

      await fetch("http://localhost:9000/logIn", {
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
        
        .then(async(res) => {
        let data=await  res.json()
          console.log(data)
          if(data.success){

            setEmail("");
            setPassword("")
            setMsg("Login Successfully");
            setTimeout(() => {
              setMsg();
            }, 3000)
            navigate("/dashboard")
          }else{
            setMsg("Invalid username or password")
          setTimeout(() => {
            setMsg();
          }, 3000)
          }
        })
        .catch((e)=>{
          console.log(e)
          setMsg("Invalid username or password")
          setTimeout(() => {
            setMsg();
          }, 3000)
        });

    };
  }


  return (
    <>
      <Header profileIcon={false} />
        <div className="container">

          <div className="form input">
            <h1 className="h1">Login</h1>
            <span>{msg}</span>
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
<br></br>
            <b> <a href="http://localhost:3000/reset">Forgot Password ?</a></b>
            <p><b>Don't have an account ?   <a href="http://localhost:3000/">Sign up</a></b></p>
          </div>
          <div className="msg">
          </div>


        </div>
        </>
  );
}

export default Login;
