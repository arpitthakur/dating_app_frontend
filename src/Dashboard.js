import { useState } from "react";

import '../src/css/header.css'


const LoginForm = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Age: "",
    Gender: "",
    State: "",
  });
  const [savedata, setSavedata] = useState()

  const onUpdateField = e => {

    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
    // console.log('form',form)
  };

  const handleLogin = (e) => {
    // if(!form.Name||!form.Age||!form.Email||form.value){
    //   alert("All fields are required ")
    // }else{
    //   alert("submit")


    // }
    e.preventDefault()

    console.log('form', form)
    console.log(savedata)
    setSavedata(form)

  }
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4 clr">

          <form className="form input" >
            <h1 className="text-dark h1 "><i class="fa-solid fa-user m-3"></i>Profile Setting</h1>
            <div className="full">
              <div className="formGroup">

                <input
                  className="formField"
                  type="text"
                  required
                  placeholder="Name"
                  name="Name"
                  value={form.Name}
                  id="name"

                  onChange={onUpdateField}

                />
              </div>
              <label htmlFor="name" >
                <i class="fa-solid fa-pen-to-square pen"></i>
              </label>
            </div>
            <div className="full">
              <div className="formGroup">

                <input
                  className="formField"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  required
                  id="email"
                  value={form.Email}
                  onChange={onUpdateField}
                />
              </div>
              <label htmlFor="email" >
                <i class="fa-solid fa-pen-to-square pen"></i>
              </label>
            </div>
            <div className="full">

              <div className="formGroup">

                <input
                  className="formField"
                  type="number"
                  placeholder="Age"
                  name="Age"
                  required
                  id="age"
                  value={form.Age}
                  onChange={onUpdateField}
                />
              </div>
              <label htmlFor="age" >
                <i class="fa-solid fa-pen-to-square pen"></i>
              </label>
            </div>
            <div className="full">

              <select className="formField select"
                type="text"
                required
                value={form.value}
                id="gender"
                onChange={onUpdateField}>
                <option>Gender</option>
                <option>female</option>
                <option>male</option>

              </select>
              <label htmlFor="gender" >
                <i class="fa-solid fa-pen-to-square pen"></i>
              </label>


            </div>
            <div classname="full">

              <select className="formField select"
                value={form.value}
                id="state"
                onChange={onUpdateField}>
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
              <label htmlFor="state" >
                <i class="fa-solid fa-pen-to-square pen" ></i>
              </label>



            </div>
            <div className="formActions">
              <button className="formSubmitBtn text-white bg-dark" onClick={handleLogin}
                type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default LoginForm;