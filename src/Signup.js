import React, { useState } from "react";
import '../src/css/header.css'
import Header from './Header';
import { useNavigate } from "react-router-dom";
function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age,setAge] = useState("")
  const [gender,setGender] = useState("")
  
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
  const handleclick = async () => {
    

    if (!email || !name || !password||!age||!gender) {
     if(emailRegex.test(email)){
      alert("correct")
     }
     }
     else {
      alert("Signup successfully");
    await fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({
        name,
        email,
        password,
        age,
        gender,
      }),
    }).then(navigate("/login")).catch();
  }
  
  };
  return (
    <>
    <Header profileIcon={false}/>
    <form>
    <div className="form input">
    <h1 className="h1">Signup</h1>
      <input
        type="text"
        value={name} 
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      ></input>
      
      <input
        type="text"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
      ></input>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        placeholder="Enter your age"
      ></input>
       <input
        type="text"
        required
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      ></input>
      <button className="btn btn-dark" onClick={handleclick}><b>Signup</b></button>
      <p><b>Already have an account ?   <a href="http://localhost:3000/login">Login</a></b></p>
    </div>
    </form>
    </>
  );
}

export default Signup;
