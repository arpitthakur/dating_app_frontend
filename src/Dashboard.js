import { useState } from "react";

import  '../src/css/header.css'


const LoginForm = ()=> {
  const [form, setForm] = useState({
    Name: "",
    Email:"",
    Age:"",
    Gender:"",
    State: "",
  });

  const onUpdateField = e => {


    
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const handleLogin=()=>{
    if(!form.Name||!form.Age||!form.Email||!form.State||!form.Gender){
      alert("All fields are required ")
    }else{
      alert("submit")
    }
    
  }

  

  return (
    <div className="container">

    <form className="form input" >
    <h1 className="text-dark h1 "><i class="fa-solid fa-user m-3"></i>Profile Setting</h1>
     <div className="full">
      <div className="formGroup">
 
        <input
          className="formField"
          type="text"
          placeholder="Name"
          name="Name"
          value={form.Name}
          required
          onChange={onUpdateField}
          
        />
      </div><i class="fa-solid fa-pen-to-square pen"></i>
      </div>
      <div className="full">
      <div className="formGroup">
       
        <input
          className="formField"
          type="text"
          placeholder="Email"
          name="Email"
          required
          value={form.Email}
          onChange={onUpdateField}
        />
        </div>
        <i class="fa-solid fa-pen-to-square pen"></i>
      </div>
      <div className="full">

      <div className="formGroup">
       
        <input
          className="formField"
          type="number"
          placeholder="Age"
          name="Age"
          required
          value={form.Age}
          onChange={onUpdateField}
        />
      </div>
      <i class="fa-solid fa-pen-to-square pen"></i>
      </div>
<div className="full">
      <div className="formGroup">
        <select  className="formField select"
          type="text"
          // placeholder="Gender"
          required
          // name="Gender"
          value={form.Gender}
          onChange={onUpdateField}>
          <option>Gender</option>
          <option>female</option>
          <option>male</option>

        </select>
        <i class="fa-solid fa-pen-to-square pen"></i>
      </div>
      
        {/* <input
          className="formField"
          type="text"
          placeholder="Gender"
          required
          name="Gender"
          value={form.Gender}
          onChange={onUpdateField}
        /> */}
      </div>
      <div className="formGroup ">
        <select className="formField select">
          <option>State</option>
          <option>haryana</option>
          <option>punjab</option> 
          <option>himachal</option>
          <option>goa</option>
          <option>uttar pardesh</option>
          <option>utrakhand</option> 
          <option>kerala</option>
          <option>bihar</option>
          <option>sikkim</option>
        </select>
{/*         
        <input
          className="formField"
          type="text"
          placeholder="State"
          required
          name="State"
          value={form.State}
          onChange={onUpdateField}
        /> */}
      </div>
      <div className="formActions">
        <button className="formSubmitBtn text-white bg-dark" onClick={handleLogin}
        type="submit">
          Save
        </button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;