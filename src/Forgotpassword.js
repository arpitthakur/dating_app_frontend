import axios from "axios";
import React, { useState } from "react";
import '../src/css/header.css'
import Header from './Header';
import { useNavigate } from "react-router-dom";

function Forgotpassword() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [show, setShow] = useState(1)
  const [msg, setMsg] = useState()

  const confirmPasswordFun = () => {
    console.log(newPassword, confirmPassword)
    if (!newPassword && !confirmPassword) {
      alert("field required")
    } else if (newPassword !== confirmPassword) {
      setMsg("Password does not match")
      setTimeout(() => {
        setMsg("");
      }, 3000)
      // var config = {
      //   method:'post',
      //   url:'http://localhost:9000/confirmPassword',
      //   data:{email,password:newPassword}
      // }
      // axios(config)
      // .then ((response)=>{
      //   console.log(respon  se)
      // })
      // .catch((e)=>{
      //   console.log(e)
      // })
    } else {
      var config = {
        method: 'post',
        url: 'http://localhost:9000/confirmPassword',
        data: { email, password: newPassword }
      }
      axios(config)
        .then((response) => {
          console.log(response)
          setMsg("Password changed successfully")
          setTimeout(() => {
            setMsg("");
          }, 3000)
        }).then(navigate("/login"))
        .catch((e) => {
          console.log(e)
        })

    }

  }
  const validateOtp = async () => {
    if (!otp) {
      alert("field required")
    } else {
      var config = {
        method: 'post',
        url: 'http://localhost:9000/otpValidate',
        data: { otp, email },
      }
      axios(config)
        .then((response) => {
          setShow(3)
          console.log(response)
        })
        .catch((e) => {
          if (e.response.status === 404) {
            setMsg("Invalid otp")
            setTimeout(() => {
              setMsg("");
            }, 3000)
          }
          console.log(e)
        })
    }
  }


  const handleLogin = async () => {
    if (!email) {
      alert("All fields are required ")
    } else {
      var config = {
        method: 'post',
        url: 'http://localhost:9000/forgotPassword',
        data: { email },
      }
      axios(config) 
        .then((response) => {
          console.log(response)
          setShow(2)

          setMsg("Please enter your otp")
          setTimeout(() => {
            setMsg("");
          }, 3000)


        }
        ).catch((e) => {
          if (e.response.status === 404) {
            setMsg("Please enter valid email")
            setTimeout(() => {
              setMsg("");
            }, 3000)
          }
          console.log(e)
        })


    }

  }


  return (
    <>
      <Header profileIcon={false} />

      <div className="container">

        <div className="form input">
          <h1 className="h1">Reset</h1>
          <span>{msg && msg}</span>

          {show === 1 ?
            <>
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button className="btn btn-dark butt" onClick={handleLogin}><b>Submit</b></button>

            </> :
            show === 2 ?

              <>
                <input
                  type="number"
                  placeholder="OTP"
                  value={otp}

                  onChange={(e) => setOtp(e.target.value)}
                ></input>
                <button className="btn btn-dark butt" onClick={validateOtp}><b>Submit</b></button>

              </> :
              <>
                <input
                  type="password"
                  placeholder="new password"
                  value={newPassword}

                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirmPassword}

                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
                <button className="btn btn-dark butt" onClick={confirmPasswordFun}><b>Submit</b></button>
              </>
          }
        </div>
      </div></>
  );
}

export default Forgotpassword;
