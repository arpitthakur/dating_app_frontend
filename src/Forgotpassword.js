import React, { useState } from "react";

import '../src/css/header.css'
import Header from './Header';

function Forgotpassword() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");



  const handleLogin = async () => {
    if(!email||!otp){
        alert("All fields are required ")
      }else{
        alert("submit")
      }
    
  }


  return (
    <>
      <Header profileIcon={false} />
      <form>
        <div className="container">

          <div className="form input">
            <h1 className="h1">Reset</h1>
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              type="number"
              placeholder="OTP"
              value={otp}
              required
              onChange={(e) => setOtp(e.target.value)}
            ></input>
            <button className="btn btn-dark butt" onClick={handleLogin}><b>Submit</b></button>

            
            
          </div>
        


        </div></form></>
  );
}

export default Forgotpassword;
