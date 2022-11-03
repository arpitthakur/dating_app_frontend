import { useState } from "react";

import  '../src/css/header.css'
import Header from "./Header";

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

  const onSubmitForm = e => {
    e.preventDefault();
    
    alert(JSON.stringify(form, null, 2));
   
  };

  return (
    <div className="container">
  

    <form className="form input" onSubmit={onSubmitForm}>
    <h1 className="text-dark h1 "><i class="fa-solid fa-user m-3"></i>Profile Setting</h1>
      <div className="formGroup">
 
        <input
          className="formField"
          type="text"
          placeholder="Name"
          name="Name"
          value={form.Name}
          onChange={onUpdateField}
          
        />
      </div>
      <div className="formGroup">
       
        <input
          className="formField"
          type="text"
          placeholder="Email"
          name="Email"
          value={form.Email}
          onChange={onUpdateField}
        />
        </div>

      <div className="formGroup">
       
        <input
          className="formField"
          type="number"
          placeholder="Age"
          name="Age"
          value={form.Age}
          onChange={onUpdateField}
        />
      </div>

      <div className="formGroup">
      
        <input
          className="formField"
          type="text"
          placeholder="Gender"
          name="Gender"
          value={form.Gender}
          onChange={onUpdateField}
        />
      </div>
      <div className="formGroup">
        
        <input
          className="formField"
          type="text"
          placeholder="State"
          name="State"
          value={form.State}
          onChange={onUpdateField}
        />
      </div>
      <div className="formActions">
        <button className="formSubmitBtn text-white bg-dark" 
        type="submit">
          Save
        </button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;